import React from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import Form from './Form';
import { Contact, ContactSubtitle, ContactTexts, ContactTitle, Content } from './styles';
import SocialMedias from './SocialMedias';

const Contato = () => {
	return (
		<AnimatedPage>
			<Content>
				<ContactTexts>
					<ContactTitle>Está interessado no meu trabalho?</ContactTitle>
					<ContactSubtitle>Contate me!</ContactSubtitle>
				</ContactTexts>
				<Contact>
					<p>Me mande uma mensagem</p>
					<Form />
					<p>ou</p>
					<SocialMedias />
				</Contact>
			</Content>
		</AnimatedPage>
	);
};

export default Contato;