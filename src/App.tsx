import React from 'react';
import { Belief, Header, Mission, Story } from './components';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className=''>
			<Header />
			<Story />
			<Mission />
			<Belief />
			<Footer />
		</div>
	);
};

export default App;
