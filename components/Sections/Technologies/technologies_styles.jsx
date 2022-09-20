import styled from "styled-components";

export const Content = styled.div`
`
export const TechList = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	list-style: none;
	width: 100%;
	gap: 20px;
	@media (max-width: 580px){
		grid-template-columns: 1fr;
	}

`
export const TechListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	border: 1px solid white;
	border-radius: 10px;
	min-height: 100%;
	gap: 10px;

`
export const TechText = styled.p`
	color: var(--primary-text-color);
	font-family: 'Montserrat',sans-serif;
	text-align: center;
	font-size: clamp(1.3rem,1.6vw,1.8rem);
	line-height: 1.3;
	width: 80%;
	text-align: start;
`
export const TechImage = styled.img`
	width: 15%;
`