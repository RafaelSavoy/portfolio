import styled from 'styled-components'

export const Content = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	text-align: center;
	margin-top: 30px;
	border-radius: 5px;
	height: 80vh;
`
export const ContactTexts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

`
export const ContactTitle = styled.h1`
	font-family: 'Montserrat',sans-serif;
	color: var(--primary-color);
	font-size: 3rem;
`
export const ContactSubtitle = styled.h2`
	font-family: 'Montserrat',sans-serif;
	color: var(--second-color);
	margin-top: 15px;
	font-size: 2.5rem;
`
export const Contact = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	p{
		color: white;
		font-size: 20px;
		margin: 10px 0;
		width: 100%;
	}
	p:first-child{
		text-align: left;
	}
`
export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`
export const FormInput = styled.input`
	border: none;
	width: 350px;
	padding: 8px;
	font-family: 'Montserrat';
	font-size: 15px;
	color: white;
	background: none;
	border-radius: 5px;
	border: #0a82ae 1px solid;
	outline: none;
	transition: border .5s ease-in-out;
	:focus{
		border: var(--second-color) 1px solid;
	}
`
export const FormMessage = styled.textarea`
	height: 100px;
	padding: 0;
`
export const FormButton = styled.button`
	position: relative;
	transition: all .2s ease-in-out;
	:hover{
		background: #0a82ae;
	}
`
export const ContactLinkList = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	width: 100%;
`
export const ContactLinkListItem = styled.li`
	:nth-child(1n){
		transition: scale .2s ease-in-out;
	}
	:nth-child(1n):hover{
		scale: 1.2;
	}
`