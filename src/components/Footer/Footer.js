import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Container } from 'react-bootstrap';

import footerStyle from './footer.module.css';

const Footer = () => (
	<footer className={footerStyle.Footer}>
		<Container>
			<Row xs={12} className={footerStyle.FooterContainer}>
				<Col xs={12} md={4}>
					<h4 className={footerStyle.Title}>Akash Chhetri ©2020</h4>
				</Col>
				<Col
					xs={12}
					md={{ span: 3, offset: 5 }}
					className={footerStyle.FaContainer}
				>
					<a
						href="https://github.com/achhetr"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={['fab', 'github']}
							className={`${footerStyle.FaItem} ${footerStyle.FaItemGit}`}
							size="2x"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/akashchhetri/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={['fab', 'linkedin-in']}
							className={`${footerStyle.FaItem} ${footerStyle.FaItemLkd}`}
							size="2x"
						/>
					</a>
					<a
						href="https://www.freecodecamp.org/akashchhetri"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={['fab', 'free-code-camp']}
							className={`${footerStyle.FaItem} ${footerStyle.FaItemFCC}`}
							size="2x"
						/>
					</a>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
