import React from 'react';

import homePageStyle from './homePage.module.css';
import Home from './Home/Home';
import Techskills from './Techskills/Techskills';
import Testimonials from './Testimonials/Testimonials';
import PersonalBio from './PersonalBio/PersonalBio';

const HomePage = () => (
	<div className={homePageStyle.HomeContainer}>
		<Home />
		<Techskills />
		<Testimonials />
		<PersonalBio />
	</div>
);

export default HomePage;
