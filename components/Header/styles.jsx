import styled from "styled-components";

{
    /*Header*/
}
export const StyledHeader = styled.header`
    position: fixed;
    top: 0px;
    border-bottom: 1px solid white;
    width: 100%;
    background-color: rgb(34, 34, 34, 0.8);
    backdrop-filter: blur(10px);
    z-index: 2;
`;
export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    max-width: 1500px;
    width: 90%;
    margin: 0 auto;

    @media (max-width: 580px) {
        flex-direction: column;
    }
    @media (min-width: 1500px) {
        justify-content: space-between;
    }
`;
{
    /*Logo*/
}
export const StyledLogo = styled.div`
    display: block;
    text-align: center;
`;
export const Name = styled.h1`
    color: var(--primary-text-color);
    font-size: clamp(2rem, 2.5vw + 1rem, 2.5rem);
    font-family: "Montserrat";
    font-weight: lighter;
    word-spacing: -100%;
    span {
        color: var(--second-text-color);
        font-family: "Montserrat";
    }
`;
export const Profession = styled.p`
    color: var(--primary-text-color);
    font-family: "Montserrat";
    font-weight: lighter;
    text-align: center;
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
`;
export const OpenNav = styled.button`
    background: none;
    color: white;
    border: none;
    font-size: 30px;
    cursor: pointer;
    @media (min-width: 580px) {
        display: none;
    }
`;
export const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
