import React, { useEffect, useState } from "react";
import {
    AboutProject,
    Content,
    ProjectImage,
    ProjectLink,
    ProjectList,
    ProjectListItem,
    ProjectName,
} from "./projects_styles";
import { StyledSection, Title } from "../sectionStyles";
import { request } from "../../../lib/datocms";

const Projects = ({ data }) => {
    return (
        <StyledSection id="projetos" justifyContent="none">
            <Title textAlign="center" margin="20px 0">
                Projetos
            </Title>
            <Content>
                <ProjectList>
                    {data.allProjects.map((project) => {
                        return (
                            <ProjectListItem key={project.id}>
                                <ProjectImage src={project.banner.url} />
                                <AboutProject>
                                    <ProjectName>{project.title}</ProjectName>
                                    <ProjectLink href={project.repo}>
                                        Ver mais
                                    </ProjectLink>
                                </AboutProject>
                            </ProjectListItem>
                        );
                    })}
                </ProjectList>
            </Content>
        </StyledSection>
    );
};

export default Projects;
