import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
	title: string;
};

const Title = ({ title }: Props) => {
	const ctrls = useAnimation();

	return (
		<div className=''>
			<motion.h3
				className={`vertical-lr text-8xl font-semibold ing-gradient bg-clip-text text-transparent`}
			>
				{title}
			</motion.h3>
		</div>
	);
};

export default Title;
