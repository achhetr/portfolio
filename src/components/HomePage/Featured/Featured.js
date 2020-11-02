import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import featuredStyle from './featured.module.css';

const Featured = () => {
	return (
		<div className={featuredStyle.Container}>
			<div className={featuredStyle.LeftContainer}>
				<h4 className={featuredStyle.Title}>Featured</h4>
				<div className={featuredStyle.ImageContainer}>
					<h4 className={featuredStyle.InfoTitle}>
						Covid Alert System
					</h4>
					<Image
						src="https://vegan-blog-image-bucket.s3.amazonaws.com/portfolio/tinyurl.png"
						rounded
						className={featuredStyle.Image}
					/>
					<div className={featuredStyle.ButtonContainer}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://tinyurl.com/covid-aus"
							className={featuredStyle.Button}
						>
							Covid Alert Website
						</a>
						<Link to="/projects" className={featuredStyle.Button}>
							See All Projects
						</Link>
					</div>
				</div>
			</div>
			<div className={featuredStyle.RightContainer}>
				<h4 className={featuredStyle.Title}>Project</h4>
				<div className={featuredStyle.InfoContainer}>
					<ol className={featuredStyle.InfoList}>
						<li className={featuredStyle.InfoListItem}>
							More than{' '}
							<span className={featuredStyle.Badge}>
								50+ users
							</span>
						</li>
						<li className={featuredStyle.InfoListItem}>
							<span className={featuredStyle.Badge}>html</span>
							<span className={featuredStyle.Badge}>css</span>
							<span className={featuredStyle.Badge}>
								Javascript
							</span>{' '}
							used for website
						</li>
						<li className={featuredStyle.InfoListItem}>
							<span className={featuredStyle.Badge}>
								Responsives
							</span>{' '}
							Website
						</li>

						<li className={featuredStyle.InfoListItem}>
							Provide{' '}
							<span className={featuredStyle.Badge}>
								live covid 19 update
							</span>{' '}
							for Australia and Victoria
						</li>
						<li className={featuredStyle.InfoListItem}>
							Using{' '}
							<span className={featuredStyle.Badge}>Python</span>{' '}
							for Automation, Web Scraping and Rest API
						</li>
						<li className={featuredStyle.InfoListItem}>
							<span className={featuredStyle.Badge}>
								Amazon Web Services (AWS)
							</span>{' '}
							Lambda, API Gateway, DyanamoDB and S3 Bucket
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default Featured;

{
	/* <Image
	src="https://vegan-blog-image-bucket.s3.amazonaws.com/portfolio/tinyurl.png"
	rounded
	className={featuredStyle.Image}
/>; 
						<Button
							target="_blank"
							rel="noopener noreferrer"
							href="https://tinyurl.com/covid-aus"
							variant="success"
						>
							Covid Alert Website
						</Button>
*/
}
