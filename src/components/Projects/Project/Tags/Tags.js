import React from 'react';
import uuid from 'react-uuid';

const Tags = (props) => {
	const tagList = props.tags;
	return (
		<>
			{tagList.map((tag) => (
				<em key={uuid()}>{tag}, </em>
			))}
		</>
	);
};

export default Tags;
