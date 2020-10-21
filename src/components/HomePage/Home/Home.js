import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeStyle from './home.module.css';

const Home = () => {
	return (
		<div className={homeStyle.Home}>
			<h2 className={homeStyle.Title}>Akash Chhetri</h2>
			<h4 className={homeStyle.Profile}>
				I am a Junior Full Stack Developer
			</h4>
			<Link to="/projects" className={homeStyle.ProjectBtn}>
				<Button variant="outline-primary">Check my projects</Button>{' '}
			</Link>
		</div>
	);
};

export default Home;
