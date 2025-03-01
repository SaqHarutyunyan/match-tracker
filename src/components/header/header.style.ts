import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    background-color: #090909;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    }
`;
