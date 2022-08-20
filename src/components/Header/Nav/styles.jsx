import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkList = styled.ul`
	display: flex;
	list-style: none;
`
export const StyledLI = styled.li`
	margin: 1rem;
`
export const StyledLink = styled(Link)`
	color: var(--primary-color);
	cursor: pointer;
	font-family: 'Roboto';
	letter-spacing: 1px;
	font-size: clamp(0.5rem, 1rem + 1vw, 1.5rem);
	text-decoration: none;

	:hover{
		text-decoration: underline;
	}
`
