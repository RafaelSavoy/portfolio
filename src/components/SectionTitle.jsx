import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-size: 4rem;
	color: var(--primary-color);
	font-family: 'Roboto';
	text-align: center;
	font-weight: normal;
	margin-top: 20px;
`

export default props => 
	<StyledH1>{props.value}</StyledH1>
