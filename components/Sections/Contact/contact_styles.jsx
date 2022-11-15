import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    transition: all 0.5s;
    gap: 3rem;
    @media (max-width: 710px) {
        justify-content: center;
        height: auto;
    }
`;
export const ContactTexts = styled.div`
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin: auto;
    h1 {
        font-size: var(--h1-font-size);
        color: var(--primary-text-color);
    }
    h2 {
        font-size: var(--h2-font-size);
        color: var(--second-text-color);
    }
`;
export const ContactMethods = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
    p {
        text-align: center;
        font-size: var(--p-font-size);
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
    & > .social-icon {
        width: 5rem !important;
        height: 5rem !important;
    }
`;
