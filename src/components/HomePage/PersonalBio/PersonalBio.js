import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';
import personalBioStyle from './personalBio.module.css';
import { Link } from 'react-router-dom';

const PersonalBio = () => {
	return (
		<>
			<HomeContainer title="What do I do?">
				<Row noGutters>
					<Col
						xs={12}
						md={{ span: 4, offset: 1 }}
						className={personalBioStyle.ImageContainer}
					>
						<img
							src="./images/pro-1.jpg"
							className={personalBioStyle.Image}
							alt="professional pic"
						/>
						<div className={personalBioStyle.ImageFlip}>
							<p>Want to know more...</p>
							<Link to="/about">
								<Button className={personalBioStyle.AboutBtn}>
									<FontAwesomeIcon
										icon={['fas', 'user']}
										size="1x"
									/>{' '}
									About me
								</Button>
							</Link>
						</div>
					</Col>
					<Col
						xs={12}
						md={{ span: 5, offset: 2 }}
						className={personalBioStyle.BodyContainer}
					>
						<h4>Akash on Weekdays</h4>
						<ol>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'desktop']}
									size="2x"
								/>{' '}
								Frontend Developer
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'database']}
									size="2x"
								/>{' '}
								Backend Developer
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'server']}
									size="2x"
								/>{' '}
								Serverless Enthusiast
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'keyboard']}
									size="2x"
								/>{' '}
								Full Stack Developer
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'users-cog']}
									size="2x"
								/>{' '}
								Administration Officer
							</li>
						</ol>
					</Col>
				</Row>
			</HomeContainer>

			<HomeContainer title="" color="lightgrey">
				<Row noGutters>
					<Col
						xs={12}
						md={{ span: 5, offset: 1 }}
						className={personalBioStyle.BodyContainer}
					>
						<h4>Akash on Weekends</h4>
						<ol>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'tasks']}
									size="2x"
								/>{' '}
								Startup Projects
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fab', 'youtube']}
									size="2x"
								/>{' '}
								Udemy and Youtube
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'running']}
									size="2x"
								/>{' '}
								Outdoor Sports
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'dumbbell']}
									size="2x"
								/>{' '}
								Gym
							</li>
							<li>
								<FontAwesomeIcon
									icon={['fas', 'broom']}
									size="2x"
								/>{' '}
								House Chef
							</li>
						</ol>
					</Col>
					<Col
						xs={12}
						md={{ span: 4, offset: 2 }}
						className={personalBioStyle.ImageContainer}
					>
						<img
							src="./images/cas-1.jpg"
							className={personalBioStyle.Image}
							alt="casual pic"
						/>
						<div className={personalBioStyle.ImageFlip}>
							<p>Want to know more...</p>
							<Link to="/about">
								<Button className={personalBioStyle.AboutBtn}>
									<FontAwesomeIcon
										icon={['fas', 'user']}
										size="1x"
									/>{' '}
									About me
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</HomeContainer>
		</>
	);
};

export default PersonalBio;
