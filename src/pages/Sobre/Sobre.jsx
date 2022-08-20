import React from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import { Content, Name, Presentation, PresentationName, PresentationText, SW, Text } from './styles';


const Sobre = () => {
	return (
		<AnimatedPage>
			<Content>
				<PresentationName >
					<Presentation>Olá, eu sou</Presentation>
					<Name>Rafael <span>Savoy</span></Name>
				</PresentationName>
				<Text>
					<PresentationText>
						Tenho 17 anos, sou de Limeira-SP e sempre fui <SW>apaixonado</SW> por tecnologia. Desde que ganhei meu primeiro computador, sempre tive vontade de <SW>explorar</SW> e saber o que está por trás das <SW>tecnologias</SW> presentes no meu dia a dia, foi então que conheci a <SW>programação</SW>. Venho me aprofundando e buscando <SW>experiência</SW> para que isso possa continuar fazendo parte, como já faz, da minha vida. Escolhi a área web porque eu sou <SW>fascinado</SW> em entender a complexidade que é a <SW>internet</SW>, e o que ela pode nos proporcionar se for bem explorada.
					</PresentationText>
				</Text>
			</Content>
		</AnimatedPage>
	);
};

export default Sobre;