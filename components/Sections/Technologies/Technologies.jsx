import React from 'react';
import { Content, TechImage, TechList, TechListItem, TechText } from './technologies_styles';
import { StyledSection, Title } from '../sectionStyles';



const Technologies = ({ data }) => {
	return (
		<StyledSection id='techs'>
			<Title textAlign='center' margin='20px'>Tecnologias que eu uso</Title>
			<Content>
				<TechList>
					{data.allTechnologies.map(technology => {
						return (
							<TechListItem key={technology.id}>
								<TechImage src={technology.techicon.url} />
								<TechText>{technology.description}</TechText>
							</TechListItem>
						)
					})}
				</TechList>
			</Content>
		</StyledSection>
	);
};

export default Technologies;