import React, { PropsWithChildren } from "react";
import { IconWrapper, StyledButton } from "./button.style";

type ButtonProps = {
    icon?: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    pressed?: boolean;
    onClick?: () => void;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    children,
    icon,
    variant = "primary",
    disabled = false,
    pressed = false,
    onClick,
}) => {
    return (
        <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            {children}
        </StyledButton>
    );
};

export default Button;
