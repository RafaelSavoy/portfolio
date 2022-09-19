import React from 'react';
import { StyledLI, StyledLink } from './styles';



const NavLink = (props) => {
	return (
		<StyledLI>
			<StyledLink href={props.href}>
				{props.value}
			</StyledLink>
		</StyledLI>

	);
};

export default NavLink;