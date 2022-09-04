import Slider from "react-slick";
import styled from "styled-components";

export const Content = styled.div`
`
export const ProjectList = styled.ul`
	display: grid;
	justify-content: center;
	width: 90%;
	margin: 0 auto;
	grid-template-columns: repeat(auto-fit, minmax(250px,1fr));;
	grid-gap: 10px;
	list-style: none;
`
export const ProjectListItem = styled.li`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 0px;
	border: 1px solid rgb(255, 255, 255,0.5);
	border-radius: 5px;
	object-fit: cover;
	transition: all .2s ease-in-out;
	:hover{
		background: rgb(255, 255, 255,0.2);
		cursor: pointer;
		
	}

`
export const ProjectImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	background: red;
	border-radius: 5px 5px 0px 0px;
`
export const AboutProject = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
	gap: 5px;
`
export const ProjectName = styled.p`
	color: var(--primary-text-color);
	font-family: 'Montserrat',sans-serif;
	font-size: clamp(1.3rem,1.5vw,1.7rem);
	word-break: keep-all;
`
export const ProjectModal = styled.div`
	height: 100vh;
	width: 100vw;
	background: rgb(0,0,0,0.7);
	z-index: 2;
	position: fixed;
	left: 0;
	top: 0;
	transition-property: visibility,opacity;
	transition-duration: .2s;
	transition-timing-function: ease-in-out;
	visibility: ${props => props.open ? 'visible' : 'hidden'};
	opacity: ${props => props.open ? '1' : '0'};
`
export const ModalContent = styled.div`
	width: 90%;
	height: 80%;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--background-color);
`
export const StyledSlider = styled(Slider)`
	background: red;
	width: 70%;
	height: 80%;
	margin: 0 auto;
`
export const SliderItem = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
	background: blue;
	img{
		margin: 0 auto;
		object-fit: contain;
		background: green;
	}

`
export const CloseModal = styled.button`
	position: absolute;
	right: 0;
`