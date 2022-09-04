import React from 'react';
import { Content, TechList, TechListItem } from './technologies_styles';
import { useQuery } from "graphql-hooks";
import { StyledSection, Title } from '../style';

const TECHNOLOGY_QUERY = `query TECHNOLOGIES {
	allTechnologies {
	  id
	  name
	  description
	  techicon {
		url
	  }
	}
  }
  `

const Technologies = () => {
	const { loading, error, data } = useQuery(TECHNOLOGY_QUERY)
	if (loading) return "Carregando...";
	if (error) return "Alguma coisa deu errado!";
	return (
		<StyledSection height='100%'>
			<Content>
				<Title>Tecnologias que eu uso</Title>
				<TechList>
					{data.allTechnologies.map(technology => {
						return (
							<TechListItem key={technology.id}>
								<img src={technology.techicon.url} />
								<p>{technology.description}</p>
							</TechListItem>
						)
					})}
				</TechList>
			</Content>
		</StyledSection>
	);
};

export default Technologies;