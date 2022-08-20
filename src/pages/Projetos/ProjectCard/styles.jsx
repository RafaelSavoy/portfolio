import styled from "styled-components";

export const Card = styled.div`
	width: 300px;
	background: white;
	border-radius: 10px;
	overflow: hidden;
	background: none;
	border: 1px solid gray;
`
export const CardImage = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
	transition: all .5s ease-in-out;
`
export const CardInfos = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	text-align: center;
`
export const CardTitle = styled.p`
	color: white;
	font-family: 'Roboto';
	font-size: 18px;
	letter-spacing: 1px;
`
export const CardButton = styled.button`
	outline: none;
	background: none;
	color: white;
	border: 1px solid black;
	padding: 5px;
	border-radius: 5px;
	font-family: 'Poppins',sans-serif;
	cursor: pointer;
`