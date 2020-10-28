import React from 'react';
import homeContainerStyle from './homeContainer.module.css';

const HomeContainer = (props) => {
	return (
		<div className={homeContainerStyle.Container}>
			<h4 className={homeContainerStyle.Title}>{props.title}</h4>
			{props.children}
		</div>
	);
};

export default HomeContainer;
