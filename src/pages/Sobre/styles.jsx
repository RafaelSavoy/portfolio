import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	max-width: 1400px;
	margin: 20px auto;
	width: 80vw;
	height: calc(100vh - 200px);
`
export const PresentationName = styled.div`
	width: 100%;
	text-align: left;
`
export const Presentation = styled.p`
	color: var(--primary-color);
	font-size: clamp(1rem,2.5vw, 2rem);
`
export const Name = styled.h1`
	font-size: clamp(3rem,10vw, 10rem);
	color: var(--primary-color);
	font-family: 'Ubuntu',sans-serif;
	font-weight: lighter;
	word-spacing: -100%;
	span{
		color: var(--second-color);
		font-family: 'Ubuntu',sans-serif;
	}
`
export const Text = styled.div`
`
export const PresentationText = styled.p`
	color: var(--primary-color);
	margin-top: 1rem;
	font-family: 'Open Sans',sans-serif;
	font-size: clamp(1rem,3vw, 2rem);
	text-align: left;
	line-height: 1.7;
`
export const SW = styled.strong`
	font-weight: bold;
	color: var(--second-color);;
`