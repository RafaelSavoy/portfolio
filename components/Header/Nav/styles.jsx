import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    @media (max-width: 580px) {
        visibility: hidden;
        overflow: hidden;
        width: 100vw;
        left: 0;
        top: 60px;
        transition-property: all;
        transition-duration: 0.5s;
        height: 0px;
        margin: 0px;
        ${(props) =>
            props.open &&
            css`
                visibility: visible;
                height: 30px;
                margin: 10px;
            `}
    }
`;

export const LinkList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    @media (max-width: 580px) {
        justify-content: space-around;
        margin: 0 auto;
        width: 90%;
    }
`;
export const StyledLI = styled.li`
    margin: 1rem;
    right: 0;
`;
export const StyledLink = styled.a`
    color: var(--primary-text-color);
    cursor: pointer;
    font-family: "Roboto";
    letter-spacing: 1px;
    font-size: clamp(0.5rem, 1rem + 1vw, 1.5rem);
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`;
