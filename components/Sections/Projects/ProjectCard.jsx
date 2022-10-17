import React from "react";
import {
    AboutProject,
    ProjectImage,
    ProjectLink,
    ProjectListItem,
    ProjectName,
} from "./projects_styles";

const ProjectCard = ({ banner, title, repo }) => {
    return (
        <ProjectListItem>
            <ProjectImage src={banner.url} alt="banner do projeto" />
            <AboutProject>
                <ProjectName>{title}</ProjectName>
                <ProjectLink href={repo} target="_blank">
                    Ver mais
                </ProjectLink>
            </AboutProject>
        </ProjectListItem>
    );
};

export default ProjectCard;
