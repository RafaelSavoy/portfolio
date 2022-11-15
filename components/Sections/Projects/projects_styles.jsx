import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    margin: 20px auto;
    width: 100%;
`;
export const ProjectList = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, minmax(30rem,1fr));
    grid-gap: 10px;
    list-style: none;
    width: 100%;
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(30rem,1fr));
    }
    @media (max-width: 550px) {
        grid-template-columns: repeat(1, minmax(30rem,1fr));
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
    align-items: center;
    justify-content: space-between;
`;
export const ProjectName = styled.p`
    color: var(--primary-text-color);
    font-family: "Montserrat", sans-serif;
    font-size: var(--p-font-size);
    margin: auto 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 1rem;
    width: 90%;
`;
export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    color: white;
    font-size: var(--p-font-size);
`;
