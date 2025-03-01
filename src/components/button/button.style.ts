import styled from "styled-components";

type StyledButtonProps = {
    variant: "primary" | "secondary" | "danger";
    disabled?: boolean;
    onClick?: () => void;
};

export const StyledButton = styled.button<StyledButtonProps>`
    width: 204px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 16px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;

    ${({ variant }) => {
        switch (variant) {
            case "primary":
                return "background: #EB0237; color: #FFFFFF;";
            case "secondary":
                return "background: #A01131; color: #FFFFFF;";
            case "danger":
                return "background: red; color: white;";
            default:
                return "background: blue; color: white;";
        }
    }}

    &:hover {
        background-color: #a01131;
    }

    &:disabled {
        background: lightgray;
        color: darkgray;
        cursor: not-allowed;
        background-color: #701328;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    font-size: 20px;
`;
