import styled from "styled-components";
import AnimatedPage from "../../components/AnimatedPage";

const Techs = styled(AnimatedPage)`
`
const Cards = styled.div`
	margin-top: 50px;
`
const StyledTechCard = styled.div`
	display: flex;
	align-items: center;
	border-radius: 10px;
	border: 1px solid white;
	justify-content: space-around;
	width: 100%;
	height: 25vh;
	padding: 5px;
	margin: 15px 0;
`
const CardText = styled.div`
	width: 80%;
	text-align: center;
	p{
		font-family: 'Montserrat',sans-serif;
		font-size: clamp(1rem,2vw,1.7rem);
		color: white;
		line-height: 1.5;
	}
`
const CardImage = styled.img`
	display: block;
	padding: 10px;
	height: min(150px,100%);
`
const Topic = styled.p`

`

export { StyledTechCard, Cards, CardText, CardImage, Techs }