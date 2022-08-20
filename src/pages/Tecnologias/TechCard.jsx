import React from 'react';
import ReactIcon from '../../assets/images/reactjs-icon.svg'
import { CardImage, CardText, StyledTechCard } from './styles';

const TechCard = (props) => {
	return (
		<StyledTechCard>
			<CardImage src={props.image}>
			</CardImage>
			<CardText>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto totam minima corrupti voluptatum quod esse. Praesentium
				</p>
			</CardText>
		</StyledTechCard>
	);
};

export default TechCard;