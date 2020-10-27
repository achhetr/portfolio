import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import testimonialsStyle from './testimonials.module.css';

const Testimonials = () => {
	return (
		<div className={testimonialsStyle.Container}>
			<h4 className={testimonialsStyle.Title}>Technical Skills</h4>
			<Container className="mt-5" data-aos="fade-left">
				<Row noGutters>
					<Col>Hi</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Testimonials;
