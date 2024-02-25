import React from "react";
import { Content, DevIcon, Presentation, Text, ToDownIcon } from "./styles";
import { StyledSection, Title } from "../sectionStyles";

const About = () => {
    return (
        <StyledSection id="sobre">
            <Content>
                <Presentation>
                    <Title>Quem sou eu:</Title>
                    <Text>Tenho 19 anos e sou Desenvolvedor Web.</Text>
                    <Text>
                        Durante o último ano estou estudando e desenvolvendo projetos para aprimorar minhas habilidades. Almejo me tornar um desenvolvedor Full Stack, trabalhando em diversas plataformas.
                    </Text>
                </Presentation>
                <DevIcon />
            </Content>
            <ToDownIcon />
        </StyledSection>
    );
};

export default About;
