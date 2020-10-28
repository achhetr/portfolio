import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';
import personalBioStyle from './personalBio.module.css';

const PersonalBio = () => {
	return (
		<HomeContainer title="Personal Bio">
			<Row className>
				<Col xs={12} md={6}>
					<Image
						src={require('../../../images/cas-1.jpg')}
						rounded
						className={personalBioStyle.Image}
					/>
				</Col>
				<Col xs={12} md={6}>
					<Image
						src={require('../../../images/pro-1.jpg')}
						rounded
						className={personalBioStyle.Image}
					/>
				</Col>
			</Row>
		</HomeContainer>
	);
};

export default PersonalBio;
