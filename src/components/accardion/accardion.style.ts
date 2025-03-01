import styled from "styled-components";

const AccordionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const AccordionItemContainer = styled.div`
    gap: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f1f1;
    padding: 15px;
    cursor: pointer;
    display: flex;
    background-color: #0b0e12;
    border-radius: 4px;
    @media (max-width: 600px) {
        padding: 8px;
        gap: 16px;
    }
`;

const AccardionHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CommandNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;

const CommandName = styled.h2`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const CommandScore = styled.span`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    margin: 0 5px;
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const CommandIconContainer = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 14px;
    @media (max-width: 600px) {
        width: 28px;
        height: 28px;
    }
`;

const ScoreTracker = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
    gap: 4px;
`;

const AccardionArrow = styled.span.attrs<{ open: boolean }>((props) => ({
    style: {
        transform: props.open ? "rotate(180deg)" : "rotate(0deg)",
    },
}))`
    transition: transform 0.3s;
    @media (max-width: 600px) {
        display: none;
    }
`;
const AccardionMobileArrow = styled.span.attrs<{ open: boolean }>((props) => ({
    style: {
        transform: props.open ? "rotate(180deg)" : "rotate(0deg)",
    },
}))`
    transition: transform 0.3s;
    @media (min-width: 601px) {
        display: none;
    }
`;

const AccardionDetalis = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px;
    cursor: pointer;
    background-color: #0b0e12;
    @media (max-width: 600px) {
        padding: 0;
    }
`;

export {
    AccordionContainer,
    AccordionItemContainer,
    CommandNameContainer,
    CommandIconContainer,
    CommandName,
    ScoreTracker,
    AccardionArrow,
    AccardionDetalis,
    AccardionHeader,
    CommandScore,
    AccardionMobileArrow,
};
