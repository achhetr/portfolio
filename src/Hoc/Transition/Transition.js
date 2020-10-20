import React, { useState, useEffect } from 'react';
import './transition.css';

const Transition = (props) => {
	const [didMount, setDidMount] = useState(false);

	useEffect(() => {
		setDidMount((prevState) => !prevState);
	}, []);

	return (
		<div className={`fade-in ${didMount && 'visible'}`}>
			{props.children}
		</div>
	);
};

export default Transition;
