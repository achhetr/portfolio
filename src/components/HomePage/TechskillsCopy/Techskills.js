import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';
import techSkillsStyle from './techSkills.module.css';

const Techskills = () => (
	<HomeContainer title="Technical Skills">
		<Container className="mt-5" data-aos="fade-up">
			<Row noGutters>
				<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
					<div className={techSkillsStyle.CardFront}>
						<Card bg="danger" text="white">
							<Card.Header>Frontend</Card.Header>
							<Card.Body>
								<Card.Title>HTML, CSS, JS, ReactJS</Card.Title>
								<Card.Text>
									Experienced with front end skills, can
									develop static and dynamic websites. Please
									check my projects.
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className={techSkillsStyle.CardBack}>
						<Card bg="primary" text="white">
							<Card.Header>Frontend</Card.Header>
							<Card.Body>
								<Card.Title>HTML, CSS, JS, ReactJS</Card.Title>
								<Card.Text>
									Experienced with front end skills, can
									develop static and dynamic websites. Please
									check my projects.
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Col>
				<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
					<div className={techSkillsStyle.CardFront}>
						<Card bg="warning" text="white">
							<Card.Header>Backend</Card.Header>
							<Card.Body>
								<Card.Title>NodeJS, Python</Card.Title>
								<Card.Text>
									Experienced with back end skills
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className={techSkillsStyle.CardBack}>
						<Card bg="info" text="white">
							<Card.Header>Backend</Card.Header>
							<Card.Body>
								<Card.Title>NodeJS, Python</Card.Title>
								<Card.Text>
									Experienced with back end skills
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Col>
				<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
					<div className={techSkillsStyle.CardFront}>
						<Card bg="success" text="white">
							<Card.Header>Cloud and Database</Card.Header>
							<Card.Body>
								<Card.Title>
									AWS, SQL, MongoDB, Mongoose
								</Card.Title>
								<Card.Text>Experienced with Database</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className={techSkillsStyle.CardBack}>
						<Card bg="dark" text="white">
							<Card.Header>Cloud and Database</Card.Header>
							<Card.Body>
								<Card.Title>
									AWS, SQL, MongoDB, Mongoose
								</Card.Title>
								<Card.Text>Experienced with Database</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	</HomeContainer>
);

export default Techskills;
