import React from 'react';
import { Container } from 'react-bootstrap';
import homeContainerStyle from './homeContainer.module.css';

const HomeContainer = (props) => {
	return (
		<div
			className={homeContainerStyle.Container}
			style={{ backgroundColor: props.color, minWidth: props.fullWidth }}
		>
			<h4
				className={homeContainerStyle.Title}
				style={{ color: props.titleColor }}
			>
				{props.title}
			</h4>
			<Container
				data-aos="fade-up"
				className={homeContainerStyle.WrappedContainer}
			>
				{props.children}
			</Container>
		</div>
	);
};

export default HomeContainer;
