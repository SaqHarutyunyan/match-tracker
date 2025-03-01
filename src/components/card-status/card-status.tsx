import React from "react";
import { StyledStatusCard } from "./card-status.style";

type CardStatusProps = {
    status: "live" | "finished" | "match-preparing";
};

const CardStatus: React.FC<CardStatusProps> = ({ status }) => {
    return (
        <StyledStatusCard status={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </StyledStatusCard>
    );
};

export default CardStatus;
