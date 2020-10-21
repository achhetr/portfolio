import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import projectStyle from './project.module.css';
import Tags from './Tags/Tags';

const Project = (props) => (
	<Card className={projectStyle.Container}>
		<Card className={projectStyle.Card}>
			<Card.Img variant="top" src={props.project.imageUrl} />
			<Card.Body>
				<Card.Title className="text-center">
					{props.project.title}{' '}
				</Card.Title>
				<Card.Text className="text-center">
					{props.project.body}
				</Card.Text>
			</Card.Body>
			{props.project.tags ? (
				<Card.Body>
					<Card.Text className={projectStyle.Tags}>
						<Tags tags={props.project.tags} />
					</Card.Text>
				</Card.Body>
			) : (
				<div></div>
			)}
			<Card.Body>
				<Row>
					<Col xs={12} md={6} className={projectStyle.BtnCol}>
						<Card.Link
							href={props.project.liveUrl}
							className={
								props.project.liveUrl
									? projectStyle.BtnGroup
									: projectStyle.BtnGroupDisabled
							}
						>
							{props.project.liveUrl ? (
								<FontAwesomeIcon
									icon={['fas', 'eye']}
									size="1x"
								/>
							) : (
								<FontAwesomeIcon
									icon={['fas', 'eye-slash']}
									size="1x"
								/>
							)}{' '}
							Live
						</Card.Link>
					</Col>
					<Col xs={12} md={6} className={projectStyle.BtnCol}>
						{props.project.githubUrl && (
							<Card.Link href={props.project.githubUrl}>
								<FontAwesomeIcon
									icon={['fab', 'github']}
									size="1x"
									color="#4078c0;"
								/>{' '}
								Github
							</Card.Link>
						)}
					</Col>
				</Row>
			</Card.Body>
		</Card>
	</Card>
);

export default Project;
