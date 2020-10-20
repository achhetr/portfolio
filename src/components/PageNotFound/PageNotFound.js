import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

import pageStyle from './pageNotFound.module.css';

const PageNotFound = () => {
	return (
		<Container>
			<div className={pageStyle.Home}>
				<h4 className={pageStyle.Profile}>
					OOPS, Page not Found Navigate to
				</h4>
				<Link to="/" className={pageStyle.ProjectBtn}>
					<Button variant="outline-primary">Home Page</Button>{' '}
				</Link>
			</div>
		</Container>
	);
};

export default PageNotFound;
