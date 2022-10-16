import { Content, ProjectList } from "./projects_styles";
import { StyledSection, Title } from "../sectionStyles";
import ProjectCard from "./ProjectCard";

const Projects = ({ data }) => {
    return (
        <StyledSection id="projetos" justifyContent="none">
            <Title textAlign="center" margin="20px 0">
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
