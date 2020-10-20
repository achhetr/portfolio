import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project/Project';

import projectsStyle from './projects.module.css';
import projectList from '../../Constants/projectList';

const Projects = () => {
	return (
		<Container>
			<h1 className={projectsStyle.Title}>Projects</h1>
			<div className={projectsStyle.Container}>
				<Row>
					{projectList.map((project, i) => (
						<Project project={project} key={i} />
					))}
				</Row>
			</div>
		</Container>
	);
};

export default Projects;
