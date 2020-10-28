import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';

const PersonalBio = () => {
	return (
		<HomeContainer title="Personal Bio">
			<Container>
				<Row>
					<Col xs={12} md={6}>
						Card one
					</Col>
					<Col xs={12} md={6}>
						Card two
					</Col>
				</Row>
			</Container>
		</HomeContainer>
	);
};

export default PersonalBio;
