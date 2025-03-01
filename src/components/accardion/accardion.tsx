import React, { useState } from "react";
import {
    AccardionArrow,
    AccardionDetalis,
    AccardionHeader,
    AccordionContainer,
    AccordionItemContainer,
    CommandIconContainer,
    CommandName,
    CommandNameContainer,
    ScoreTracker,
} from "./accardion.style";
import CardStatus from "../card-status/card-status";
import MatchSummary from "./matchSummary";

type StatusType = "live" | "finished" | "match-preparing";

type AccordionItem = {
    id: number;
    team1: string;
    team2: string;
    score1: number;
    score2: number;
    status: StatusType;
};

const accordionData: AccordionItem[] = [
    {
        id: 1,
        team1: "Command №1",
        team2: "Command №2",
        score1: 2,
        score2: 1,
        status: "finished",
    },
    {
        id: 2,
        team1: "Command №3",
        team2: "Command №4",
        score1: 3,
        score2: 2,
        status: "live",
    },
    {
        id: 3,
        team1: "Command №5",
        team2: "Command №6",
        score1: 1,
        score2: 1,
        status: "match-preparing",
    },
];

const Accardion = () => {
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

    const toggleAccordion = (id: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <AccordionContainer>
            {accordionData.map(
                ({ id, team1, team2, score1, score2, status }) => (
                    <AccordionItemContainer key={id}>
                        <AccardionHeader>
                            <CommandNameContainer>
                                <CommandIconContainer>
                                    <img src="icons/command-icon.png" alt="" />
                                </CommandIconContainer>
                                <CommandName>{team1}</CommandName>
                            </CommandNameContainer>
                            <ScoreTracker>
                                <div>
                                    <span>{score1}</span>
                                    <span>:</span>
                                    <span>{score2}</span>
                                </div>
                                <CardStatus status={status} />
                            </ScoreTracker>
                            <CommandNameContainer>
                                <CommandName>{team2}</CommandName>
                                <CommandIconContainer>
                                    <img src="icons/command-icon.png" alt="" />
                                </CommandIconContainer>
                                <AccardionArrow
                                    open={openItems[id]}
                                    onClick={() => toggleAccordion(id)}
                                >
                                    <img src="icons/arrowdown.png" alt="" />
                                </AccardionArrow>
                            </CommandNameContainer>
                        </AccardionHeader>
                        {openItems[id] && (
                            <AccardionDetalis>
                                <MatchSummary />
                                <MatchSummary />
                            </AccardionDetalis>
                        )}
                    </AccordionItemContainer>
                )
            )}
        </AccordionContainer>
    );
};

export default Accardion;
