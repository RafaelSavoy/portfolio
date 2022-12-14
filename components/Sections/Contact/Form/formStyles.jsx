import styled from "styled-components";

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
`;
export const FormLabel = styled.label`
    font-size: var(--p-font-size);
    font-family: "Montserrat", sans-serif;
`;
export const FormInput = styled.input`
    width: 100%;
    margin: 0 auto;
    background: none;
    outline: none;
    padding: 0.5rem;
    color: white;
    border: 1px solid #1cabbe;
    border-radius: 5px;
    transition: border 0.2s ease-in-out;

    &:focus {
        border: 1px solid #00e1ff;
    }
`;
export const Message = styled.textarea`
    height: 10rem;
    resize: none;
`;
export const SubmitMessage = styled.button`
    width: 100%;
    background: var(--button-color);
    padding: 1rem;
    font-size: 1.8rem;
    color: #fff;
    border-radius: 5px;
    border: none;
    transition: all 0.5s ease-in-out;
    font-family: "Open Sans", sans-serif;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
        background: #ffffff;
        color: black;
    }
`;
export const ContactLinks = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: var(--h1-font-size);
    & > * {
        transition: all 0.2s;
    }
    & > *:hover {
        scale: 1.1;
    }
`;
