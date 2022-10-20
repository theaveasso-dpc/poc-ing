import React from 'react';
import { AnimatedText } from './AnimatedText';
import Title from './Title';

const Belief = () => {
	return (
		<section className='relative bg-white overflow-hidden '>
			<div className='w-full rounded-t-[100px] flex justify-between items-center p-20 '>
				<div className=' relative flex flex-col justify-start items-start xl:ml-20 lg:mt-5'>
					<div className='relativemt-5 space-y-8 max-w-[1200px] font-medium text-left p-size tracking-wide leading-[60px] text-slate-900 '>
						<AnimatedText>
							ING strives to bring international best practices
							and expertise to Cambodia, a country rapidly
							developing by openings its markets and integrating
							into the economy.
						</AnimatedText>
						<AnimatedText>
							We are committed to following the highest global
							standards and have established a comprehensive
							corporate governance framework, including policies,
							procedures, and guidelines for ethics, operations,
							financial control, and reporting and risk
							management.
						</AnimatedText>
					</div>
				</div>
				<AnimatedText>
					<Title title={'Our Belief'} />
				</AnimatedText>
				<div className='absolute w-[700px] h-[700px] rounded-full -bottom-[250px] -left-[400px] border-[80px] border-orange-300 opacity-10'></div>
				<div className='absolute w-[700px] h-[700px] border-[100px] border-yellow-400 opacity-20 -bottom-[200px] -right-[200px]'></div>
			</div>
		</section>
	);
};

export default Belief;
