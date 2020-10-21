import React from 'react';

import homePageStyle from './homePage.module.css';
import Home from './Home/Home';
import Techskills from './Techskills/Techskills';

const HomePage = () => (
	<div className={homePageStyle.HomeContainer}>
		<Home />
		<Techskills />
	</div>
);

export default HomePage;
