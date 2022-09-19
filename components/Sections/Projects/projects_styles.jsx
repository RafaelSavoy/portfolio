import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	margin: auto;
`
export const ProjectList = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px,1fr));;
	grid-gap: 10px;
	list-style: none;
`
export const ProjectListItem = styled.li`
	display: flex;
	flex-direction: column;
	border: 1px solid rgb(255, 255, 255,0.5);
	border-radius: 5px;
`
export const ProjectImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 5px 5px 0px 0px;
`
export const AboutProject = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px;
`
export const ProjectName = styled.p`
	color: var(--primary-text-color);
	font-family: 'Montserrat',sans-serif;
	font-size: clamp(1.2rem,1.3vw,1.7rem);
	margin: auto 0;
	white-space: nowrap;
`
export const ProjectLink = styled.a`
	color: var(--primary-text-color);
	font-family: 'Roboto',sans-serif;
	font-size: clamp(1.1rem,1.2vw,1.5rem);
	transition: all .2s ease-in-out;
	border: 1px solid white;
	padding: 2px 5px;
	border-radius: 3px;
	text-decoration: none;
	white-space: nowrap;
	:hover{
		background-color: white;
		color: black;
	}
`