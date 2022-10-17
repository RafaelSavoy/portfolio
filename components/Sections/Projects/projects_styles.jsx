import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    margin: auto;
`;
export const ProjectList = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 310px);
    grid-gap: 10px;
    list-style: none;
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const ProjectListItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(255, 255, 255, 0.5);
    border-radius: 5px;
`;
export const ProjectImage = styled.img`
    width: 100%;
    object-fit: cover;
`;
export const AboutProject = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;
export const ProjectName = styled.p`
    color: var(--primary-text-color);
    font-family: "Montserrat", sans-serif;
    font-size: clamp(1.2rem, 1.3vw, 1.7rem);
    margin: auto 0;
    white-space: nowrap;
`;
export const ProjectLink = styled.a`
    color: var(--primary-text-color);
    font-family: "Roboto", sans-serif;
    font-size: clamp(1.1rem, 1.2vw, 1.5rem);
    transition: all 0.2s ease-in-out;
    border: 1px solid white;
    padding: 2px 5px;
    border-radius: 3px;
    text-decoration: none;
    white-space: nowrap;
    :hover {
        background-color: white;
        color: black;
    }
`;
