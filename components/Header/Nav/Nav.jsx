import React from 'react';
import NavLink from './NavLink';
import { LinkList, StyledNav } from './styles';

const Nav = (props) => {
	return (
		<StyledNav open={props.open}>
			<LinkList>
				<NavLink href='#sobre' value='Sobre' />
				<NavLink href='#techs' value='Tecnologias' />
				<NavLink href='#projetos' value='Projetos' />
				<NavLink href='#contato' value='Contato' />
			</LinkList>
		</StyledNav>
	);
};

export default Nav;