import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 80vh;
`
export const PresentationName = styled.div`
	width: 100%;
	text-align: left;
`
export const Presentation = styled.p`
	color: var(--primary-color);
	font-size: clamp(1.5rem,2vw, 2rem);
`
export const Name = styled.h1`
	font-size: clamp(3rem,5vw, 10rem);
	color: var(--primary-color);
	font-family: 'Ubuntu',sans-serif;
	font-weight: lighter;
	margin-bottom: 1.5rem;
	span{
		color: var(--second-color);
		font-family: 'Ubuntu',sans-serif;
	}
`
export const Text = styled.div`
`
export const PresentationText = styled.p`
	color: var(--primary-color);
	font-family: 'Open Sans',sans-serif;
	font-size: clamp(1.5rem,2.5vw, 2rem);
	line-height: 1.7;
	text-align: left;
`