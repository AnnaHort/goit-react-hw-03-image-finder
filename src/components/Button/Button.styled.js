import styled from 'styled-components';

export const LoadMoreButtonStuled = styled.button`
    height: 35px;
    width: 100px;
    background-color: #a7a2ad;
    border: none;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3px;
    font-family: Ysabeau Office,sans-serif;
    font-size: 16px;
    display: block;
    &:hover,
    :focus {
        background-color: #ac9e9e;
    color: lightgray;
    outline: none;
    box-shadow: 0 0 5px rgb(110, 99, 99); 
    transition: 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`