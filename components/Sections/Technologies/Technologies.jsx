import React from "react";
import { Content, TechList } from "./technologies_styles";
import { StyledSection, Title } from "../sectionStyles";
import TechCard from "./TechCard";

const Technologies = ({ data }) => {
    return (
        <StyledSection id="techs">
            <Title textAlign="center" margin="20px">
                Tecnologias que eu uso
            </Title>
            <Content>
                <TechList>
                    {data.allTechnologies.map((tech) => {
                        return <TechCard key={tech.id} {...tech} />;
                    })}
                </TechList>
            </Content>
        </StyledSection>
    );
};

export default Technologies;
