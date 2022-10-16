import React from "react";
import { Content, DevIcon, Presentation, Text, ToDownIcon } from "./styles";
import { StyledSection, Title } from "../sectionStyles";

const About = () => {
    return (
        <StyledSection id="sobre">
            <Content>
                <Presentation>
                    <Title>Quem sou eu?</Title>
                    <Text>Tenho 17 anos e sou Desenvolvedor Web.</Text>
                    <Text>
                        Durante o último ano estou estudando Desenvolvimento Web
                        e as suas stacks, procurando me especializar na produção
                        de sistemas completos, trabalhando em frontend e
                        backend.
                    </Text>
                </Presentation>
                <DevIcon />
            </Content>
            <ToDownIcon />
        </StyledSection>
    );
};

export default About;
