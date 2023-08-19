import styled from 'styled-components';

export const SectionContainerStyled = styled.section`
    background-color: #d3d3d3;
    padding: 30px;
`

export const FormStyled = styled.form`
    width: max-content;
    background-color: #d3d3d3;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`

export const ButtonStyled = styled.button`
   
   border: 1px solid #ab8f8f;
    border-left: none;
    background-color: #a7a2ad;
    border-radius: 5px;
    padding-top: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    &:hover,
    :focus {
        background-color: #ac9e9e;
    outline: none;

    color: lightgray;
transition: 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`

export const InputStyled = styled.input`
    width: 400px;
    color: #6e6363;
    border: 1px solid #ab8f8f;
    border-radius: 5px;
    padding: 3px;
    font-size: 20px;
    &:focus{
        outline: none; 
    border-color: rgb(110, 99, 99); 
    box-shadow: 0 0 5px rgb(110, 99, 99); 
    }
`