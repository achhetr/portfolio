import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeContainer from '../../../Hoc/HomeContainer/HomeContainer';
import testimonialsStyle from './testimonials.module.css';
import testimonialsList from '../../../Constants/testimonialsList';

const Testimonials = () => {
	const [index, setIndex] = useState(0);

	const carouselHandler = (direction) => {
		const length = testimonialsList.length;
		switch (direction) {
			case 'left':
				index === 0
					? setIndex(() => length - 1)
					: setIndex((prevIndex) => prevIndex - 1);
				break;
			case 'right':
				index === length - 1
					? setIndex(() => 0)
					: setIndex((prevIndex) => prevIndex + 1);
				break;
			default:
				return;
		}
	};

	useEffect(() => {
		let timer = setTimeout(() => {
			carouselHandler('right');
		}, 10000);
		return () => clearTimeout(timer);
	});

	const Carousel = ({ number }) => {
		const { name, position, imageUrl, comment } = testimonialsList[number];
		return (
			<Row
				className={testimonialsStyle.CarouselContainer}
				data-aos="fade-left"
			>
				<Col
					xs={12}
					md={4}
					className={testimonialsStyle.ImageContainer}
				>
					<div className={testimonialsStyle.Image}>
						<Image src={imageUrl} roundedCircle />
					</div>

					<div className={testimonialsStyle.TitleContainer}>
						<h5>{name}</h5>
						<p>{position}</p>
					</div>
				</Col>
				<Col
					xs={12}
					md={8}
					className={testimonialsStyle.QuoteContainer}
				>
					<FontAwesomeIcon
						icon={['fas', 'quote-left']}
						size="1x"
						className={testimonialsStyle.FaLeftQuote}
					/>
					<p>{comment}</p>
					<FontAwesomeIcon
						icon={['fas', 'quote-right']}
						size="1x"
						className={testimonialsStyle.FaRightQuote}
					/>
				</Col>
			</Row>
		);
	};

	return (
		<HomeContainer title="Testimonials" color="#f6f5ff">
			<div className={testimonialsStyle.FaContainer}>
				<FontAwesomeIcon
					icon={['fas', 'angle-left']}
					size="3x"
					className={testimonialsStyle.FaLeft}
					onClick={() => carouselHandler('left')}
				/>
				<FontAwesomeIcon
					icon={['fas', 'angle-right']}
					size="3x"
					className={testimonialsStyle.FaRight}
					onClick={() => carouselHandler('right')}
				/>
			</div>

			<Carousel number={index} />
		</HomeContainer>
	);
};

export default Testimonials;
