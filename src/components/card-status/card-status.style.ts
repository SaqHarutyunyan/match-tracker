import styled from "styled-components";
import { Status } from "../../lib/types";

type StyledStatusCardProps = {
    status: Status;
};

export const StyledStatusCard = styled.div<StyledStatusCardProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 4px;
    min-width: 92px;
    padding: 6px 8px;
    font-size: 12px;
    font-weight: 600;
    ${({ status }) => {
        switch (status) {
            case Status.live:
                return "background: #43AD28; color: #FFFFFF;";
            case Status.finished:
                return "background: #EB0237; color: #FFFFFF;";
            case Status.matchPreparing:
                return "background: #EB6402; color: white;";
            default:
                return "background: blue; color: white;";
        }
    }}
`;
