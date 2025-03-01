import styled from "styled-components";

const AccordionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const AccordionItemContainer = styled.div`
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
`;

const CommandIconContainer = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 14px;
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
`;

const AccardionDetalis = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    cursor: pointer;
    background-color: #0b0e12;
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
};
