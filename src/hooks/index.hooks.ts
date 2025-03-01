import { useState, useEffect, useCallback, useRef } from "react";
import { fetchMatches } from "../lib";
import { Match, Status } from "../lib/types";
import { DropDownTypes } from "../components/drop-list/drop-list";

export const useMatches = () => {
    const allMatches = useRef<Match[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const loadMatches = useCallback(async () => {
        try {
            setLoading(true);
            const data = await fetchMatches();
            setMatches(data.data.matches);
            allMatches.current = data.data.matches;
            setLoading(false);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Ошибка: не удалось загрузить информацию"
            );
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadMatches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filterMatches = useCallback(
        (status: DropDownTypes) => {
            setMatches((prev) =>
                allMatches.current.filter((match) =>
                    status === "all statuses" ? match : match.status === status
                )
            );
        },
        [setMatches]
    );

    return { matches, loading, error, filterMatches, reload: loadMatches };
};
