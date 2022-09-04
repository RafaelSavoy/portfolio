import React from 'react';
import sections from '../components/Sections/sections';
import { Main } from './styles';

const Home = () => {
	return (
		<Main>
			{sections.map((SectionComponent, id) => <SectionComponent key={id}/>)}
		</Main>
	);
};

export default Home;