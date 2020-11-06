import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';
import techSkillsStyle from './techSkills.module.css';

const Techskills = () => (
	<div id="technical">
		<HomeContainer
			title="Technical Skills"
			titleColor="white"
			color="#21293b"
		>
			<Row noGutters className={techSkillsStyle.RowContainer}>
				<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
					<div className={techSkillsStyle.CardFront}>
						<div className={techSkillsStyle.Card}>
							<Card.Header>Frontend</Card.Header>
							<Card.Body>
								<h1 className={techSkillsStyle.TechHeader}>
									HTML, CSS, ReactJS
								</h1>
								<ul
									className={
										techSkillsStyle.ListItemContainer
									}
								>
									<li className={techSkillsStyle.ListItem}>
										Responsive web design
									</li>
									<li className={techSkillsStyle.ListItem}>
										Single Page Applications
									</li>
									<li className={techSkillsStyle.ListItem}>
										Animation on scroll feature
									</li>
									<li className={techSkillsStyle.ListItem}>
										Redux and Thunk
									</li>
								</ul>
							</Card.Body>
						</div>
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
						<div className={techSkillsStyle.Card}>
							<Card.Header>Backend</Card.Header>
							<Card.Body>
								<h1 className={techSkillsStyle.TechHeader}>
									NodeJS, Express, Python
								</h1>
								<ul
									className={
										techSkillsStyle.ListItemContainer
									}
								>
									<li className={techSkillsStyle.ListItem}>
										Custom RESTful APIs
									</li>
									<li className={techSkillsStyle.ListItem}>
										User login feature using JWT
									</li>
									<li className={techSkillsStyle.ListItem}>
										Test Driven Developement
									</li>
									<li className={techSkillsStyle.ListItem}>
										Automation using Python
									</li>
								</ul>
							</Card.Body>
						</div>
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
						<div className={techSkillsStyle.Card}>
							<Card.Header>Cloud and Database</Card.Header>
							<Card.Body>
								<h1 className={techSkillsStyle.TechHeader}>
									AWS, SQL, MongoDB
								</h1>
								<ul
									className={
										techSkillsStyle.ListItemContainer
									}
								>
									<li className={techSkillsStyle.ListItem}>
										Amplify for Serverless website
									</li>
									<li className={techSkillsStyle.ListItem}>
										Cognito, Lambda, S3 and SES
									</li>
									<li className={techSkillsStyle.ListItem}>
										SQL and MongoDB Database
									</li>
									<li className={techSkillsStyle.ListItem}>
										Mongoose schema validation
									</li>
								</ul>
							</Card.Body>
						</div>
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
	</div>
);

export default Techskills;
