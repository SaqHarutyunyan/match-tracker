import React from "react";
import { StyledStatusCard } from "./card-status.style";
import { Status } from "../../lib/types";

type CardStatusProps = {
    status: Status;
};

const CardStatus: React.FC<CardStatusProps> = ({ status }) => {
    console.log(status);

    return (
        <StyledStatusCard status={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </StyledStatusCard>
    );
};

export default CardStatus;
