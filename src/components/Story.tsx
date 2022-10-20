import React, { useEffect, useRef } from 'react';
import Title from './Title';

import { motion, useInView } from 'framer-motion';
import { AnimatedText } from './AnimatedText';

const Story = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		console.log('test', isInView);
	}, [isInView]);
	return (
		<section className='p-20 flex justify-center items-center sticky top-0'>
			<div className=' flex justify-center items-start'>
				<AnimatedText>
					<Title title={'Our Story'} />
				</AnimatedText>
				<div
					ref={ref}
					className='text-right text-3xl md:text-5xl mt-5 space-y-10 md:font-semibold text-gray-400 pl-20'
				>
					<AnimatedText className='lg:leading-[60px]'>
						In 1993, ING Holdings founding chairman :{' '}
						<span className=''>
							Oknha Ing Bun Hoaw, Oknha Lim Rose and Oknha Lim Bun
							Sour{' '}
						</span>{' '}
						decided to launch a trading company together.{' '}
						<span className=''>
							Over the years, the business developed and became a
							conglomerate of companies, subsequently called AZ
							Group of Companies
						</span>
					</AnimatedText>
					<AnimatedText className='lg:leading-[60px]'>
						Among those companies,{' '}
						<span className=''>
							ING Holdings Co., Ltd, founded in 2005{' '}
						</span>
						, has a diversified portfolio of assets under ownership.
						<span className=''>
							We primarily focus on the immense amount of land
							development
						</span>{' '}
						divided over four sites south of Phnom Penh, East Phnom
						Penh, Siem Reap, and Sihanoukville.
					</AnimatedText>
				</div>
			</div>
		</section>
	);
};

export default Story;
