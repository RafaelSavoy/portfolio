import styled from "styled-components";

export const StyledSection = styled.section`
	height: ${props => props.height ? props.height : '100vh'};
	min-height: 50vh;
	max-width: 1500px;
	margin: 0 auto;
`

export const Title = styled.h1`
	font-size: clamp(2.5rem,2.5vw,4rem);
	color: var(--second-text-color);
	font-family: 'Poppins',sans-serif;
	margin: ${props => props.margin ? props.margin : 'none'};
	text-align: ${props => props.textAlign ? props.textAlign : 'none'};
`