import React from 'react';
import { Button, Image } from 'react-bootstrap';

import featuredStyle from './featured.module.css';

const Featured = () => {
	return (
		<div className={featuredStyle.Container}>
			<div className={featuredStyle.LeftContainer}>
				<h4 className={featuredStyle.Title}>Featured</h4>
			</div>
			<div className={featuredStyle.RightContainer}>
				<h4 className={featuredStyle.Title}>Project</h4>
				<div className={featuredStyle.BodyContainer}>
					<div className={featuredStyle.ImageContainer}>
						<Image
							src="https://vegan-blog-image-bucket.s3.amazonaws.com/portfolio/tinyurl.png"
							rounded
							className={featuredStyle.Image}
						/>
					</div>
					<div className={featuredStyle.ImageFlip}>
						<Button
							target="_blank"
							rel="noopener noreferrer"
							href="https://tinyurl.com/covid-aus"
							variant="success"
						>
							Covid Alert Website
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
