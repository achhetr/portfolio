import React from 'react';
import { Button } from 'react-bootstrap';

import homeStyle from './home.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div className={homeStyle.HomeContainer}>
		<div className={homeStyle.Home}>
			<h2 className={homeStyle.Title}>Akash Chhetri</h2>
			<h4 className={homeStyle.Profile}>
				I am a Junior Full Stack Developer
			</h4>
			<Link to="/" className={homeStyle.ProjectBtn}>
				<Button variant="primary">Check my projects</Button>
			</Link>
		</div>
	</div>
);

export default HomePage;
