import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';
import techSkillsStyle from './techSkills.module.css';

const Techskills = () => (
	<HomeContainer title="Technical Skills">
		<Row noGutters>
			<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
				<div className={techSkillsStyle.CardFront}>
					<Card bg="danger" text="white">
						<Card.Header>Frontend</Card.Header>
						<Card.Body>
							<Card.Title>HTML, CSS, JS, ReactJS</Card.Title>
							<Card.Text>
								Experienced with front end skills, can develop
								static and dynamic websites. Please check my
								projects.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className={techSkillsStyle.CardBack}>
					<Card>
						<a
							href="https://coursera.org/share/168df260a0bd63423ad033472f70f470"
							target="_blank"
							rel="noopener noreferrer"
							className={techSkillsStyle.Link}
						>
							<Image
								src="https://vegan-blog-image-bucket.s3.amazonaws.com/portfolio/fullstack.png"
								rounded
								className={techSkillsStyle.Image}
							/>
						</a>
					</Card>
				</div>
			</Col>
			<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
				<div className={techSkillsStyle.CardFront}>
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
				<div className={techSkillsStyle.CardBack}>
					<Card>
						<a
							href="https://coursera.org/share/08e6fff3b6069646c719e299526921b7"
							target="_blank"
							rel="noopener noreferrer"
							className={techSkillsStyle.Link}
						>
							<Image
								src="https://vegan-blog-image-bucket.s3.amazonaws.com/portfolio/node.png"
								rounded
								className={techSkillsStyle.Image}
							/>
						</a>
					</Card>
				</div>
			</Col>

			<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
				<div className={techSkillsStyle.CardFront}>
					<Card bg="dark" text="white">
						<Card.Header>Cloud and Database</Card.Header>
						<Card.Body>
							<Card.Title>AWS, SQL, MongoDB, Mongoose</Card.Title>
							<Card.Text>Experienced with Database</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className={techSkillsStyle.CardBack}>
					<Card>
						<a
							href="https://www.udemy.com/certificate/UC-0350531a-5380-42ce-992c-ba0daa7c2038/"
							target="_blank"
							rel="noopener noreferrer"
							className={techSkillsStyle.Link}
						>
							<Image
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-0350531a-5380-42ce-992c-ba0daa7c2038.jpg?v=1604042276000"
								rounded
								className={techSkillsStyle.Image}
							/>
						</a>
					</Card>
				</div>
			</Col>
		</Row>
	</HomeContainer>
);

export default Techskills;
