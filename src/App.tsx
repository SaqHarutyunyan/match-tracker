import React from "react";
import "./App.css";
import styled from "styled-components";
import { IconWrapper, StyledButton } from "./components/button/button.style";
import CardStatus from "./components/card-status/card-status";
import DropList from "./components/drop-list/drop-list";
import Accordion from "./components/accardion/accardion";

const Container = styled.div`
    background: #090909;
    color: #fff;
    min-height: 100vh;
    padding: 20px;
`;

function App() {
    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "start",
            }}
        >
            <StyledButton variant="primary" disabled={false}>
                Обновить
                <IconWrapper>
                    <img src="icons/refresh.png" alt="" />
                </IconWrapper>
            </StyledButton>
            <CardStatus status="live" />
            <CardStatus status="finished" />
            <CardStatus status="match-preparing" />
            <DropList />
            <Accordion />
        </Container>
    );
}

export default App;
