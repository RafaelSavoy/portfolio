import React from 'react';
import { motion } from 'framer-motion'

const animations = {
	initial: { opacity: 0, x: 100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0 }
}

const AnimatedPage = (props) => {
	return (
		<motion.section variants={animations} initial='initial' animate='animate' exit='exit' style={{ width: '90%', margin: '0 auto', maxWidth: '1500px' }}>
			{props.children}
		</motion.section>
	);
};

export default AnimatedPage;