import React, { useState } from 'react';
import styled from 'styled-components';
import projectImage from '../../assets/images/project-image.png'

const Modal = styled.div`
	display: ${props => props.isOpen ? 'flex' : 'none'};
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: rgb(0,0,0,.4);
	position: absolute;
	top: 0;
	left: 0;
	margin: 0 auto;
	z-index: 1;
	padding: 20px;
`
const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: var(--background-color);
	border-radius: 10px;
	padding: 10px;
	div:first-child{
		width: 100%;
	}
	div:last-child{
		width: 50%;
		height: 70%;
		padding: 10px;
		h1{
			text-align: center;
			margin-bottom: 10px;
			font-size: 20px;
			color: white;
		}
		p{
			font-size: 15px;
			color: white;
			line-height: 1.1;
		}
	}
	img{
			width: 100%;
			border-radius: 5px;
		}
`

const ProjectModal = (props) => {

	const [modalInfo, setModalInfo] = useState({
		isOpen: false,
		image: projectImage,
		title: 'Controle Personalizado',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus, esse consectetur, est voluptatibus aut rerum ducimus accusamus vitae dignissimos blanditiis. Porro amet mollitia dolorum possimus esse veniam consequuntur pariatur.'
	})

	return (
		<Modal isOpen={modalInfo.isOpen}>
			<Content>
				<div>
					<img src={modalInfo.image} />
				</div>
				<div>
					<h1>{modalInfo.title}</h1>
					<p>{modalInfo.text}</p>
				</div>
			</Content>
		</Modal>
	);
};

export default ProjectModal;