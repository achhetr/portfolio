import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project/Project';
import uuid from 'react-uuid';

import projectsStyle from './projects.module.css';
import projectList from '../../Constants/projectList';
import FooterInfo from '../FooterInfo/FooterInfo';

const Projects = () => (
	<>
		<Container data-aos="fade-left">
			<h1 className={projectsStyle.Title}>Projects</h1>
			<div className={projectsStyle.Container}>
				<Row className={projectsStyle.RowGrid}>
					{projectList.map((project) => (
						<Project project={project} key={uuid()} />
					))}
				</Row>
			</div>
		</Container>
		<FooterInfo />
	</>
);

export default Projects;
