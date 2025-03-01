import { MatchesResponse } from "./types";

export const fetchMatches = async (): Promise<MatchesResponse> => {
    const response = await fetch(
        "https://app.ftoyd.com/fronttemp-service/fronttemp"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch matches");
    }
    return response.json();
};
