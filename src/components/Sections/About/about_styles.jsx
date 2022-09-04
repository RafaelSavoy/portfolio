import styled, { keyframes } from "styled-components";
import { BiCodeAlt } from 'react-icons/bi'

export const Content = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	
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
	width: 40%;
	color: var(--second-text-color);
	animation: ${flyAnimation} 5s infinite;
`
export const Presentation = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	gap: 20px;
`
export const Text = styled.p`
	color: var(--primary-text-color);
	font-size: clamp(1.5rem,2vw,2rem);
	line-height: 1.3;
	font-family: 'Open Sans',sans-serif;
`