import React from "react";
import { Match as MatchEntity } from "../../lib/types";
import {
    AccardionArrow,
    AccardionDetalis,
    AccardionHeader,
    AccordionItemContainer,
    CommandIconContainer,
    CommandName,
    CommandNameContainer,
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
                        <img src="icons/command-icon.png" alt="" />
                    </CommandIconContainer>
                    <CommandName>{match.homeTeam.name}</CommandName>
                </CommandNameContainer>
                <ScoreTracker>
                    <div>
                        <span>{match.homeScore}</span>
                        <span>:</span>
                        <span>{match.awayScore}</span>
                    </div>
                    <CardStatus status={match.status} />
                </ScoreTracker>
                <CommandNameContainer>
                    <CommandName>{match.awayTeam.name}</CommandName>
                    <CommandIconContainer>
                        <img src="icons/command-icon.png" alt="" />
                    </CommandIconContainer>
                    <AccardionArrow open={!!isExpanded}>
                        <img src="icons/arrowdown.png" alt="" />
                    </AccardionArrow>
                </CommandNameContainer>
            </AccardionHeader>

            {isExpanded && (
                <AccardionDetalis>
                    <MatchSummary />
                    <MatchSummary />
                </AccardionDetalis>
            )}
        </AccordionItemContainer>
    );
}

export default Match;
