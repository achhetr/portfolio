import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const TechStack = () => {
	const techStack = ['Java', CSS];
	return (
		<Card style={{ width: '18rem' }}>
			<ListGroup variant="flush">
				{techStack.map((tech) => (
					<ListGroup.Item>{tech}</ListGroup.Item>
				))}
			</ListGroup>
		</Card>
	);
};

export default TechStack;
