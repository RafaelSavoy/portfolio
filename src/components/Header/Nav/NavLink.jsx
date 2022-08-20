import React from 'react';
import { StyledLI, StyledLink } from './styles';



const NavLink = (props) => {
	return (
		<StyledLI>
			<StyledLink to={props.href}>
				{props.value}
			</StyledLink>
		</StyledLI>

	);
};

export default NavLink;