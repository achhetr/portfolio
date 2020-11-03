import React from 'react';
import backgroundColorStyle from './backgroundColor.module.css';

const BackgroundColor = (props) => {
	return (
		<div className={backgroundColorStyle.Container}>
			<div className={backgroundColorStyle.WrappedContainer}>
				{props.children}
			</div>
		</div>
	);
};

export default BackgroundColor;
