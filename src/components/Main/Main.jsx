import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Projetos, Contato, Sobre, Tecnologias } from '../../pages/Pages'

const Main = (props) => {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Sobre />} />
				<Route path='/tecnologias' element={<Tecnologias />} />
				<Route path='/projetos' element={<Projetos />} />
				<Route path='/contato' element={<Contato />} />
			</Routes>
		</main>
	);
};

export default Main;