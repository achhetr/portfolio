import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';
import personalBioStyle from './personalBio.module.css';
import { Link } from 'react-router-dom';

const PersonalBio = () => (
	<>
		<HomeContainer title="What do I do?" color="whitesmoke">
			<Row className={personalBioStyle.RowContainer} noGutters>
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
					style={{ background: '#F7E6FF' }}
				>
					<h4>Akash on Weekdays</h4>
					<ol className={personalBioStyle.ListContainer}>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'desktop']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Frontend Developer
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'database']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Backend Developer
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'server']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Serverless Enthusiast
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'keyboard']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Full Stack Developer
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'users-cog']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Administration Officer
						</li>
					</ol>
				</Col>
			</Row>
		</HomeContainer>

		<HomeContainer title="" color="whitesmoke">
			<Row noGutters className={personalBioStyle.RowContainer}>
				<Col
					xs={12}
					md={{ span: 5, offset: 1 }}
					className={personalBioStyle.BodyContainer}
					style={{ background: '#c3f7df' }}
				>
					<h4>Akash on Weekends</h4>
					<ol>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'tasks']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Startup Projects
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fab', 'youtube']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Udemy and Youtube
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'running']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Outdoor Sports
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'dumbbell']}
								size="2x"
								className={personalBioStyle.FA}
							/>{' '}
							Gym
						</li>
						<li>
							<FontAwesomeIcon
								icon={['fas', 'broom']}
								size="2x"
								className={personalBioStyle.FA}
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

export default PersonalBio;
