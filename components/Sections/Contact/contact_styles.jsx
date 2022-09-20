import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin: 20px auto;
    height: 100%;
    transition: all 0.5s;
    @media (max-width: 710px){
        justify-content: center;
        height: auto;
        gap: 40px;
    }
`
export const ContactTexts = styled.div`
    text-align: center;
    font-family: 'Poppins',sans-serif;  
    h1{
        font-size: clamp(2.2rem,2.5vw,3rem);
        color: var(--primary-text-color);
    }
    h2{
        font-size: clamp(1.7rem,2vw,2.5rem);
        color: var(--second-text-color);
    }
`
export const ContactMethods = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        text-align: center;
        margin: 10px;
        font-size: 20px;
        font-family: 'Open Sans'
    }
`
export const ContactLinks = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    & > *{
        transition: all .2s;
    }
    & > *:hover{
        scale: 1.1;
    }
`