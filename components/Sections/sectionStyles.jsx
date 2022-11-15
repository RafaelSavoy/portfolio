import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    min-height: ${(props) => (props.minHeight ? props.minHeight : "100vh")};
    max-width: 1500px;
    margin: 5px auto;
    align-items: center;
    justify-content: center;
    width: 90%;
`;

export const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: var(--h1-font-size);
    color: var(--second-text-color);
    margin: ${(props) => (props.margin ? props.margin : "none")};
    text-align: ${(props) => (props.textAlign ? props.textAlign : "none")};
`;
