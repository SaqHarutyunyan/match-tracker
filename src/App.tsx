import React, { useCallback, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { useMatches } from "./hooks/index.hooks";
import Match from "./components/match";
import { AccordionContainer } from "./components/accardion/accardion.style";
import DropList from "./components/drop-list/drop-list";
import Button from "./components/button/button";

const Container = styled.div`
    background: #090909;
    color: #fff;
    min-height: 100vh;
    padding: 20px;
`;

function App() {
    const { matches, loading, error, reload, filterMatches } = useMatches();
    const [expandedAccordionsIds, setExpandedAccordionsIds] = useState<
        string[] | null
    >(null);

    const handleAccordionAction = useCallback(
        (accordionId: string) => {
            setExpandedAccordionsIds(
                expandedAccordionsIds?.includes(accordionId)
                    ? expandedAccordionsIds?.filter((id) => id !== accordionId)
                    : [...(expandedAccordionsIds ?? []), accordionId]
            );
        },
        [expandedAccordionsIds, setExpandedAccordionsIds]
    );

    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "start",
            }}
        >
            <DropList onFilter={(filterValue) => filterMatches(filterValue)} />
            <div>
                {error && <p>{error}</p>}
                <Button onClick={() => reload()}> reload</Button>
            </div>
            <AccordionContainer>
                {loading ? (
                    <div>loading</div>
                ) : (
                    matches.map((match) => (
                        <Match
                            key={`match-${match.title}`}
                            match={match}
                            onClick={handleAccordionAction}
                            isExpanded={expandedAccordionsIds?.includes(
                                match.title
                            )}
                        />
                    ))
                )}
            </AccordionContainer>
        </Container>
    );
}

export default App;
