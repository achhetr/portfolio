import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import arrowUpStyle from './arrowUp.module.css';

const ArrowUp = () => (
	<div className={arrowUpStyle.FaArrowContainer}>
		<a href="#home">
			<FontAwesomeIcon
				icon={['fas', 'arrow-up']}
				size="2x"
				className={arrowUpStyle.FaArrow}
			/>
		</a>
	</div>
);

export default ArrowUp;
