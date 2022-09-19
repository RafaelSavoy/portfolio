import { BiCodeAlt } from 'react-icons/bi'
import styled, { keyframes } from 'styled-components'

export const Content = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: auto !important;
	@media (max-width: 580px){
		flex-direction: column;
	}
`

const flyAnimation = keyframes`
	0%{
		transform: translateY(0px);	
	}
	50%{
		transform: translateY(15px);
		filter: drop-shadow(0 0 5px var(--second-text-color));
	}
	0%{
		transform: translateY(0);
	}
`
export const DevIcon = styled(BiCodeAlt)`
	font-size: clamp(5rem,25vw,30rem);
	display: block;
	width: 30%;
	color: var(--second-text-color);
	animation: ${flyAnimation} 5s infinite;
	@media (max-width: 580px){
		display: none;
	}
`
export const Presentation = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	@media (max-width: 580px){
		width: 100%;
	}
`
export const Text = styled.p`
	color: var(--primary-text-color);
	font-size: clamp(1.8rem,2.5vw,2.3rem);
	line-height: 1.3;
	font-family: 'Montserrat',sans-serif;
	font-weight: normal;
	line-height: 1.5;
`