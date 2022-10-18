import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
    transition: all 0.5s;
    @media (max-width: 710px) {
        justify-content: center;
        height: auto;
        gap: 4rem;
    }
`;
export const ContactTexts = styled.div`
    text-align: center;
    font-family: "Poppins", sans-serif;
    h1 {
        font-size: clamp(2.2rem, 2.5vw + 1rem, 3rem);
        color: var(--primary-text-color);
    }
    h2 {
        font-size: clamp(1.7rem, 2vw + 1rem, 2.5rem);
        color: var(--second-text-color);
    }
`;
export const ContactMethods = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    p {
        text-align: center;
        margin: 2rem;
        font-size: 2rem;
        font-family: "Montserrat", sans-serif;
    }
    @media (max-width: 456px) {
        width: 100%;
    }
`;
export const ContactLinks = styled.div`
    display: flex;
    justify-content: space-around;
    & > * {
        transition: all 0.2s;
    }
    & > *:hover {
        scale: 1.1;
    }
    & > .social-icon{
        width: 5rem !important;
        height: 5rem !important;

    }
`;
