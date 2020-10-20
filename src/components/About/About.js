import React from 'react';
import { Card, Button, Container, Image, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import aboutStyle from './about.module.css';

const About = () => {
	return (
		<Container>
			<h1 className={aboutStyle.Title}>About me</h1>
			<Card className="text-center">
				<Card.Header>Full Stack Developer</Card.Header>
				<Card.Body>
					<Card.Title>
						<h4 className={aboutStyle.ProfileQuote}>
							Sportman, Developer and Husband
						</h4>
					</Card.Title>
					<Row>
						<Col xs={12} md={4}>
							<Image
								src="https://avatars0.githubusercontent.com/u/18610657"
								roundedCircle
								className={aboutStyle.ProfilePic}
							/>
						</Col>
						<Col xs={12} md={{ span: 7, offset: 1 }}>
							<Row>
								<Card.Text className={aboutStyle.ProfileBody}>
									<p>
										Junior Developer looking for industry
										experience opportunities. Skilled in
										React, React Native, Node, Git version
										control, AWS, and deploying Serverless
										websites using AWS.
									</p>
									<p>
										I am currently co-developing a Vegan
										Blog project. Check my Github{' '}
										<a
											href="https://github.com/achhetr"
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												size="1x"
											/>
										</a>
									</p>
									<p>
										You can check my linkedin profile{' '}
										<a
											href="https://www.linkedin.com/in/akashchhetri/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon
												icon={['fab', 'linkedin-in']}
												size="1x"
											/>
										</a>
									</p>
									<p>
										If you weigh passion over experience for
										a junior role. I am your person who is
										passionate about creating projects and
										solve problems.
									</p>
								</Card.Text>
							</Row>
						</Col>
					</Row>
					<Link to="/projects">
						<Button variant="primary">Explore projects</Button>
					</Link>
				</Card.Body>
				<Card.Footer className="text-muted">
					<blockquote>Feedback is very important</blockquote>
				</Card.Footer>
			</Card>
		</Container>
	);
};

export default About;
