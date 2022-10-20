import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const horiScrollContainer = (pos: number) => {
	return {
		hidden: { opacity: 0, x: pos },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, ease: 'easeInOut' },
		},
	};
};

const titleContainer = {
	hidden: { opacity: 0, x: 30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.3,
			duration: 1.3,
		},
	},
};

const textItem = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Header = () => {
	const { scrollYProgress } = useScroll();
	const yValING = useTransform(scrollYProgress, [0, 0.3], [0, 300]);
	const yValHolding = useTransform(scrollYProgress, [0, 0.3], [0, -300]);
	return (
		<div className='h-screen w-screen overflow-hidden relative'>
			<motion.div
				variants={horiScrollContainer(500)}
				initial='hidden'
				animate='visible'
				style={{ x: yValING }}
				className='absolute -top-[175px] text-[400px] font-extrabold ing-gradient bg-clip-text text-transparent'
			>
				ING
			</motion.div>
			<motion.div
				variants={horiScrollContainer(-200)}
				initial='hidden'
				animate='visible'
				style={{ x: yValHolding }}
				className='absolute -bottom-[130px] text-[350px] font-bold ing-gradient bg-clip-text text-transparent'
			>
				HOLDINGS
			</motion.div>
			<motion.div
				variants={titleContainer}
				initial='hidden'
				animate='visible'
				className='relative lg:top-[25%] top-[150px] flex flex-col items-end justify-center p-10'
			>
				<motion.span
					variants={textItem}
					className='font-sans text-7xl font-bold text-gray-900'
				>
					Leading
				</motion.span>
				<motion.span variants={textItem} className='subtitle'>
					Financial Assets &
				</motion.span>
				<motion.span variants={textItem} className='subtitle'>
					Real estate management
				</motion.span>
				<motion.p
					variants={textItem}
					className='text-right mt-5 text-xl max-w-[800px]'
				>
					ING Holding Co., Ltd was created in 2005 and is
					Cambodia&apos;s leading financial/asset and real estate
					management organization. With a diversified portfolio of
					holdings under management/ownership and an ever-expanding
					workforce. Our relationships are firmly set worldwide, and
					we always look to expand and diversify further.
				</motion.p>
			</motion.div>
		</div>
	);
};

export default Header;
