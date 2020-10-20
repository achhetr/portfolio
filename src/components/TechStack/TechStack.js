import React from 'react';
import { Card, ListGroup, Container } from 'react-bootstrap';

const TechStack = () => {
	const techStack = ['Java', 'CSS', 'C++'];
	return (
		<Container>
			<Card style={{ width: '18rem' }}>
				<ListGroup variant="flush">
					{techStack.map((tech) => (
						<ListGroup.Item>{tech}</ListGroup.Item>
					))}
				</ListGroup>
			</Card>
		</Container>
	);
};

export default TechStack;
