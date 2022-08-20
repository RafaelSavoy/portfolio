import React from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import { Cards } from './styles';
import TechCard from './TechCard';
import ReactIcon from '../../assets/images/reactjs-icon.svg'
import Css from '../../assets/images/css3-icon.svg'
import Nodejs from '../../assets/images/nodejs-icon.svg'
import Html from '../../assets/images/html5-icon.svg'
import Javascript from '../../assets/images/javascript-icon.svg'

const Tecnologias = () => {
	return (
		<AnimatedPage>
			<Cards>
				<TechCard image={Html} /> 
				<TechCard image={Css} />
				<TechCard image={Javascript} />
				<TechCard image={ReactIcon} />
				<TechCard image={Nodejs} />
			</Cards>
		</AnimatedPage>
	);
};

export default Tecnologias;