import React from "react";
import { Match as MatchEntity } from "../../lib/types";
import {
    AccardionArrow,
    AccardionDetalis,
    AccardionHeader,
    AccardionMobileArrow,
    AccordionItemContainer,
    CommandIconContainer,
    CommandName,
    CommandNameContainer,
    CommandScore,
    ScoreTracker,
} from "../accardion/accardion.style";
import CardStatus from "../card-status/card-status";
import MatchSummary from "../accardion/matchSummary";

interface Props {
    match: MatchEntity;
    onClick: (id: string) => void;
    isExpanded?: boolean;
}
function Match({ match, onClick, isExpanded }: Props) {
    return (
        <AccordionItemContainer>
            <AccardionHeader onClick={() => onClick(match.title)}>
                <CommandNameContainer>
                    <CommandIconContainer>
                        <img
                            width={"100%"}
                            src="icons/command-icon.png"
                            alt=""
                        />
                    </CommandIconContainer>
                    <CommandName>{match.homeTeam.name}</CommandName>
                </CommandNameContainer>
                <ScoreTracker>
                    <div>
                        <CommandScore>{match.homeScore}</CommandScore>
                        <CommandScore>:</CommandScore>
                        <CommandScore>{match.awayScore}</CommandScore>
                    </div>
                    <CardStatus status={match.status} />
                </ScoreTracker>
                <CommandNameContainer>
                    <CommandName>{match.awayTeam.name}</CommandName>
                    <CommandIconContainer>
                        <img
                            width={"100%"}
                            src="icons/command-icon.png"
                            alt=""
                        />
                    </CommandIconContainer>
                    <AccardionArrow open={!!isExpanded}>
                        <img src="icons/arrowAccardion.png" alt="" />
                    </AccardionArrow>
                </CommandNameContainer>
            </AccardionHeader>

            {isExpanded && (
                <AccardionDetalis>
                    <MatchSummary match={match} />
                </AccardionDetalis>
            )}
            <AccardionMobileArrow
                onClick={() => onClick(match.title)}
                open={!!isExpanded}
            >
                <img src="icons/arrowAccardion.png" alt="" />
            </AccardionMobileArrow>
        </AccordionItemContainer>
    );
}

export default Match;
