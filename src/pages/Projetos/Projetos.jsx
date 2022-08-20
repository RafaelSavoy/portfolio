import React from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectModal from './ProjectModal';
import {StyledProjects } from './styles';

const Projetos = () => {
	return (
		<AnimatedPage>
			{/* <ProjectModal /> */}
			<StyledProjects>
				<ProjectCard />
				
			</StyledProjects>
		</AnimatedPage>
	);
};

export default Projetos;