import React from 'react';
import { Card, CardButton, CardImage, CardInfos, CardTitle } from './styles';
import projectImage from '../../../assets/images/project-image.png'

const ProjectCard = () => {
	return (
		<Card>
			<CardImage src={projectImage} />
			<CardInfos>
				<CardTitle>Landing page</CardTitle>
				<CardButton>Ver mais</CardButton>
			</CardInfos>
		</Card>
	);
};

export default ProjectCard;