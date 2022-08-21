import React from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import { Content, Name, Presentation, PresentationName, PresentationText, Text } from './styles';


const Sobre = () => {
	return (
		<AnimatedPage>
			<Content>
				<PresentationName >
					<Name>Quem sou <span>eu</span>:</Name>
				</PresentationName>
				<Text>
					<PresentationText>
						Tenho 17 anos, sou de Limeira-SP e sempre fui <strong>apaixonado</strong> por tecnologia. Desde que ganhei meu primeiro computador, sempre tive vontade de explorar e saber o que está por trás das <strong>tecnologias</strong> presentes no meu dia a dia, foi então que conheci a programação.
					</PresentationText>
					<PresentationText>
						Venho me aprofundando e buscando experiência para que isso possa continuar fazendo parte, como já faz, da minha vida. Escolhi a área web porque eu sou fascinado em entender a complexidade que é a internet, e o que ela pode nos proporcionar se for bem explorada.
					</PresentationText>
				</Text>
			</Content>
		</AnimatedPage>
	);
};

export default Sobre;