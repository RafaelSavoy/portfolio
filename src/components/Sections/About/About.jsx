import React from 'react';
import { Content, DevIcon, Presentation, Text } from './about_styles';
import { StyledSection,Title } from '../style';




const About = () => {
	return (
		<StyledSection>
			<Content>
				<Presentation>
					<Title>Quem sou eu?</Title>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi quos quis corporis labore sed dolor, cupiditate laboriosam libero minima laborum itaque aperiam iure ab, quaerat blanditiis officiis quisquam esse.
					</Text>
				</Presentation>
				<DevIcon/>
			</Content>
		</StyledSection>
	);
};

export default About;