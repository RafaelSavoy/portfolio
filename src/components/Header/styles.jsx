import styled from "styled-components";

{/*Header*/ }
export const StyledHeader = styled.header`
	border-bottom: 1px solid white;
	`
export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
	max-width: 1500px;
	margin: 0 auto;
	
	@media (max-width:485px){
		flex-direction: column;
		gap: 10px;
	}
	@media (min-width: 1500px){
		justify-content: space-between;
	}
`
{/*Logo*/ }
export const StyledLogo = styled.div`
			display: block;
			text-align: center;
		`
export const Name = styled.h1`
			color: var(--primary-color);
			font-size: clamp(2.5rem,2.5vw + 1rem,3rem);
			font-family: 'Montserrat';
			font-weight: lighter;
			word-spacing: -100%;
			span{
				color: var(--second-color);
				font-family: 'Montserrat';
			}
		`
export const Profession = styled.p`
			color: var(--primary-color);
			font-family: 'Montserrat';
			font-weight: lighter;
			text-align: center;
			font-size: clamp(1.2rem,2.5vw,1.5rem);
		`