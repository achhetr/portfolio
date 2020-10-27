import React from 'react';

import homePageStyle from './homePage.module.css';
import Home from './Home/Home';
import Techskills from './Techskills/Techskills';
import Testimonials from './Testimonials/Testimonials';

const HomePage = () => (
	<div className={homePageStyle.HomeContainer}>
		<Home />
		<Techskills />
		<Testimonials />
	</div>
);

export default HomePage;
