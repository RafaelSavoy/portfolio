import styled from 'styled-components'

export const ContactForm = styled.form` 
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    width: 100%;
`
export const FormLabel = styled.label`
    font-size: clamp(1.5rem,1.3vw,2.5rem);
    font-family: 'Montserrat',sans-serif;    
`
export const FormInput = styled.input`
    width: 100%;
    margin: 0 auto;
    background: none;
    outline: none;
    padding: 5px;
    color: white;
    border: 1px solid #1cabbe;
    border-radius: 5px;
    transition: border .2s ease-in-out;

    &:focus{
        border: 1px solid #00e1ff;
    }
`
export const Message = styled.textarea`
    height: 100px;
    resize: none;
`
export const SubmitMessage = styled.button`
    width: 100%;
    background: var(--button-color);
    padding: 10px;
    font-size: 15px;
    color: white;
    border-radius: 5px;
    border: none;
    transition: all .5s ease-in-out;
    font-family: 'Montserrat',sans-serif;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        background: #ffffff;
        color: black;

    }    
`
export const ContactLinks = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: clamp(2rem,1.5vw,2.5rem);
    & > *{
        transition: all .2s;
    }
    & > *:hover{
        scale: 1.1;
    }
`
