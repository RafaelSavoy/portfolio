import React from 'react';
import NavLink from './NavLink';
import { LinkList } from './styles';


const Nav = () => {
	return (
		<nav>
			<LinkList>
				<NavLink href='/' value='Sobre' />
				<NavLink href='tecnologias' value='Tecnologias' />
				<NavLink href='projetos' value='Projetos' />
				<NavLink href='contato' value='Contato' />
			</LinkList>
		</nav>
	);
};

export default Nav;