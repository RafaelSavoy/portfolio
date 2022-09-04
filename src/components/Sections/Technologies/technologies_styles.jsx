import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	gap: 20px;
`
export const TechList = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	list-style: none;
	width: 90%;
	gap: 20px;

`
export const TechListItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 15px;
	border: 1px solid white;
	border-radius: 10px;
	height: 200px;
	width: 100%;
	gap: 10px;
	img{
		object-fit: contain;	
		width: 30%;
	}
	p{
		margin: auto;
		color: var(--primary-text-color);
		font-family: 'Open Sans',sans-serif;
		text-align: center;
		font-size: clamp(1.1rem,2vw,2rem);
		line-height: 1.3;
		width: 80%;
		text-align: start;
	}
	@media (max-width: 500px){
		height: 100px;
	}
`