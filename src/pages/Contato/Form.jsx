import React from 'react';
import { ContactForm, FormButton, FormInput, FormMessage } from './styles';

const Form = () => {
	return (
		<ContactForm>
			<FormInput type={'text'} name={'name'} placeholder={'Nome e sobrenome'}/>
			<FormInput type={'email'} name={'email'} placeholder={'Email'}/>
			<FormInput as={FormMessage}/>
			<FormInput as={FormButton}>Enviar</FormInput>
		</ContactForm>
	);
};

export default Form;