import React from "react";
import { IconWrapper, StyledButton } from "./button.style";

type ButtonProps = {
    label: string;
    icon?: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    pressed?: boolean;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
    label,
    icon,
    variant = "primary",
    disabled = false,
    pressed = false,
    onClick,
}) => {
    return (
        <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            {label}
        </StyledButton>
    );
};

export default Button;
