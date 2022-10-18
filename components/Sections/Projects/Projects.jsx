import { Content, ProjectList } from "./projects_styles";
import { StyledSection, Title } from "../sectionStyles";
import ProjectCard from "./ProjectCard";

const Projects = ({ data }) => {
    return (
        <StyledSection id="projetos">
            <Title textAlign="center" margin="50px">
                Projetos
            </Title>
            <Content>
                <ProjectList>
                    {data.allProjects.map((project) => {
                        return <ProjectCard key={project.id} {...project} />;
                    })}
                </ProjectList>
            </Content>
        </StyledSection>
    );
};
{
}

export default Projects;
