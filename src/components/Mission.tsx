import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedText } from './AnimatedText';
const Mission = () => {
	const ctrls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start('visible');
		}
		if (!inView) {
			ctrls.start('hidden');
		}
	}, [ctrls, inView]);

	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: `0.25em`,
		},
		visible: {
			opacity: 1,
			y: `0em`,
			transition: {
				duration: 1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};
	return (
		<section className='relative p-10 pb-0'>
			<div className='w-full relative overflow-hidden rounded-t-[100px] flex flex-col p-20 bg-slate-800 backdrop-blur-2xl '>
				<motion.h5
					ref={ref}
					variants={characterAnimation}
					initial='hidden'
					animate={ctrls}
					className='text-left modern-gradient bg-clip-text text-transparent font-sans font-bold text-[120px] tracking-normal leading-tight max-w-[800px] pt-20'
				>
					We Provide You with Better Returns
				</motion.h5>
				<div className='flex flex-col justify-start items-end xl:ml-20 lg:mt-5 relative'>
					<motion.div className='relative mt-5 space-y-8 max-w-[1200px] font-medium text-right p-size tracking-wide leading-[60px] text-white '>
						<AnimatedText>
							Firstly we wish to produce superior returns for
							investors by using our experience and knowledge to
							identify the key trends and opportunities that
							emerge as Cambodia continues to develop its economy.
							Secondly, we strive daily to consider and provide
							benefits to the Cambodian people in all our business
							activities
						</AnimatedText>
						<AnimatedText>
							ING Holdings seeks to be the commercial ambassador
							for Cambodia, promoting trade and investment in
							Cambodia with partners worldwide. We work to ensure
							existing and potential investors in our projects and
							business activities are aware of and accurately
							understand the nature of Cambodia&apos;s investment
							opportunities.
						</AnimatedText>
					</motion.div>
				</div>
				<div className='absolute w-[1000px] h-[1000px] rounded-full -bottom-[250px] -right-[400px] border-[80px] border-orange-300 opacity-10'></div>
				<div className='absolute w-[700px] h-[700px] border-[100px] border-yellow-400 rotate-45 opacity-20 -bottom-[600px] -left-[100px]'></div>
			</div>
		</section>
	);
};

export default Mission;
