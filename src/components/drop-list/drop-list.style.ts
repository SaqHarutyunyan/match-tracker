import styled from "styled-components";

const SelectWrapper = styled.div`
    min-width: 170px;
    position: relative;
    z-index: 10;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const SelectBox = styled.div`
    background: #0f0f0f;
    color: #fff;
    padding: 14px 20px;
    border-radius: 4px;
    border: 1px solid #171d25;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    background: #0f1318;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    padding: 6px 0;
`;

const Option = styled.div`
    padding: 8px 12px;
    color: #b4b5b6;
    cursor: pointer;
    transition: background 0.3s;
    background: #0f1318;
    font-size: 16px;
    font-weight: 500;
    &:hover {
        background: #0d1115;
    }
    &:nth-child(1) {
        border-radius: 4px 4px 0 0;
    }
    &:nth-last-child(1) {
        border-radius: 0 0 4px 4px;
    }
`;

const Arrow = styled.span.attrs<{ open: boolean }>((props) => ({
    style: {
        transform: props.open ? "rotate(180deg)" : "rotate(0deg)",
    },
}))`
    transition: transform 0.3s;
`;

export { SelectWrapper, SelectBox, Dropdown, Option, Arrow };
