import React from 'react';

import homePageStyle from './homePage.module.css';
import Home from './Home/Home';
import Techskills from './Techskills/Techskills';
import Testimonials from './Testimonials/Testimonials';
import PersonalBio from './PersonalBio/PersonalBio';
import Featured from './Featured/Featured';

const HomePage = () => (
	<div className={homePageStyle.HomeContainer}>
		<Home />
		<Techskills />
		<Testimonials />
		<Featured />
		<PersonalBio />
	</div>
);

export default HomePage;
