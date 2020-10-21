import React from 'react';

import techSkillsStyle from './techSkills.module.css';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Techskills = () => {
	return (
		<div className={techSkillsStyle.Container}>
			<h4 className={techSkillsStyle.Title}>Technical Skills</h4>
			<Container>
				<Row>
					<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
						<div className={techSkillsStyle.CardFront}>
							<Card>Front end</Card>
						</div>
						<div className={techSkillsStyle.CardBack}>
							<Card>Front ka back</Card>
						</div>
					</Col>
					<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
						<div className={techSkillsStyle.CardFront}>
							<Card>Back end</Card>
						</div>
						<div className={techSkillsStyle.CardBack}>
							<Card>Back ka back</Card>
						</div>
					</Col>
					<Col sm={12} md={4} className={techSkillsStyle.CardFlip}>
						<div className={techSkillsStyle.CardFront}>
							<Card>AWS</Card>
						</div>
						<div className={techSkillsStyle.CardBack}>
							<Card>AWS ka back</Card>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Techskills;
