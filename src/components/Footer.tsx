import React from 'react';

import footer from '../assets/komarov-egor-io5clS15h9Q-unsplash.jpg';
import { AnimatedText } from './AnimatedText';
const Footer = () => {
	return (
		<div className='h-screen w-full relative flex justify-between bg-white p-20 pr-0 gap-8 overflow-hidden'>
			<div className='flex flex-col items-baseline leading-none'>
				<a
					className='px-4 py-2 border-2 w-[200px] text-center'
					href='_blank'
				>
					Facebook
				</a>
				<AnimatedText>
					<span className={'text-[200px] font-bold'}>ING</span>
				</AnimatedText>
				<AnimatedText>
					<span className='text-[200px] font-bold'>HOLDINGS</span>
				</AnimatedText>
				<div className='space-y-2 mt-10'>
					<p className='text-xl'>DROP US A LINE</p>
					<p className='text-4xl font-semibold tracking-wide'>
						info@ing-holding.com
					</p>
				</div>
				<div className='text-right flex flex-col self-end space-y-2 mt-10 text-lg tracking-tight'>
					<p className='font-bold text-xl'>Our Office</p>
					<span>#35, Street 392, SangKat Boeng Keng Kang 1</span>
					<span>Khan Chamkarmon, Phnom Penh, Cambodia</span>
				</div>
				<p className='text-slate-500 mt-10'>
					2022 All rights reserveds - ING HOLDINGS
				</p>
			</div>
			<AnimatedText>
				<img
					className='w-[1000px] aspect-auto'
					src={footer}
					alt='footer'
				/>
			</AnimatedText>
		</div>
	);
};

export default Footer;
