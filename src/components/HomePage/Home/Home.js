import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import homeStyle from './home.module.css';

const Home = () => (
	<div className={homeStyle.Home} id="home">
		<h2 className={homeStyle.Title}>Akash Chhetri</h2>
		<h4 className={homeStyle.Profile}>I am a Full Stack Developer</h4>
		<Link to="/projects" className={homeStyle.ProjectBtn}>
			<Button variant="outline-primary">Check my projects</Button>{' '}
		</Link>
		<div>
			<a
				href="https://github.com/achhetr"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={['fab', 'github']}
					className={`${homeStyle.FaItem} ${homeStyle.FaItemGit}`}
					size="2x"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/akashchhetri/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={['fab', 'linkedin-in']}
					className={`${homeStyle.FaItem} ${homeStyle.FaItemLkd}`}
					size="2x"
				/>
			</a>
			<a
				href="https://www.freecodecamp.org/akashchhetri"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={['fab', 'free-code-camp']}
					className={`${homeStyle.FaItem} ${homeStyle.FaItemFCC}`}
					size="2x"
				/>
			</a>
		</div>
		<p>Scroll Down</p>
		<div className={homeStyle.MoveScroll}>
			<a href="#technical">
				<FontAwesomeIcon
					icon={['fas', 'arrow-down']}
					className={`${homeStyle.FaItem} ${homeStyle.FaItemDwn}`}
					size="2x"
				/>
			</a>
		</div>
	</div>
);

export default Home;
