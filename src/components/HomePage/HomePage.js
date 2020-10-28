import React from 'react';

import homePageStyle from './homePage.module.css';
import Home from './Home/Home';
import Techskills from './Techskills/Techskills';
import TechskillsCopy from './TechskillsCopy/Techskills';
import Testimonials from './Testimonials/Testimonials';
import PersonalBio from './PersonalBio/PersonalBio';

const HomePage = () => (
	<div className={homePageStyle.HomeContainer}>
		<Home />
		<Techskills />
		<TechskillsCopy />
		<Testimonials />
		<PersonalBio />
	</div>
);

export default HomePage;
