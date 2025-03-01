import React, { useCallback, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { useMatches } from "./hooks/index.hooks";
import Match from "./components/match";
import { AccordionContainer } from "./components/accardion/accardion.style";
import DropList from "./components/drop-list/drop-list";
import Button from "./components/button/button";
import { Header } from "./components/header/header.style";
import { ErrorCont } from "./components/error-cont/error-cont.style";
import "@fontsource/inter";

const Container = styled.div`
    background: #090909;
    color: #fff;
    min-height: 100vh;
    padding: 20px;
    @media (max-width: 600px) {
        padding: 20px 12px;
    }
`;

const ButtonCont = styled.div`
    @media (max-width: 600px) {
        width: 100%;
    }
`;
const Logo = styled.a`
    text-decoration: none;
    font-family: inter;
    font-size: 28px;
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
        <>
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "start",
                }}
            >
                <Header>
                    <h1>
                        <Logo href="">
                            <img src="/logo.png" alt="" />
                        </Logo>
                    </h1>
                    <ButtonCont>
                        {error && (
                            <ErrorCont>
                                <img src="/icons/error.png" alt="" />
                                {error}
                            </ErrorCont>
                        )}

                        <Button onClick={() => reload()}>
                            Refresh
                            <img src="icons/refresh.png" alt="" />
                        </Button>
                    </ButtonCont>
                </Header>
                <DropList
                    onFilter={(filterValue) => filterMatches(filterValue)}
                />

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
        </>
    );
}

export default App;
