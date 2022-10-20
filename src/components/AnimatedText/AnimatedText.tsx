import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
	children: React.ReactNode;
	className?: string;
}
const AnimatedText = ({ children, className: styles }: Props) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const ctrls = useAnimation();

	const animatedText = {
		hidden: { opacity: 0, y: -50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, type: 'spring' },
		},
	};

	useEffect(() => {
		if (inView) {
			ctrls.start('visible');
		}
		if (!inView) {
			ctrls.start('hidden');
		}
	}, [ctrls, inView]);
	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={ctrls}
			variants={animatedText}
			className={styles}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedText;
