import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'react-uuid';

import projectStyle from './project.module.css';

const Project = (props) => {
	const tags = (tagList) => {
		return tagList.map((tag) => <em key={uuid()}>{`#${tag} `}</em>);
	};
	return (
		<Card className={projectStyle.Container}>
			<Card className={projectStyle.Card}>
				<Card.Img variant="top" src={props.project.imageUrl} />
				<Card.Body>
					<Card.Title>{props.project.title} </Card.Title>
					<Card.Text>{props.project.body}</Card.Text>
				</Card.Body>
				{props.project.tags ? (
					<Card.Body>
						<Card.Text>{tags}</Card.Text>
					</Card.Body>
				) : null}
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
};

export default Project;
