import React from 'react';
import Logo from './Logo';
import Nav from './Nav/Nav';
import { HeaderContent, StyledHeader } from './styles';



const Header = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<Logo />
				<Nav />
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;