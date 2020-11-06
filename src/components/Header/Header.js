import React from 'react';
import { Navbar, Nav, NavbarBrand, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import headerStyle from './header.module.css';

const Header = () => (
	<Navbar
		collapseOnSelect
		expand="lg"
		className={headerStyle.NavBarContainer}
	>
		<Container>
			<Link to="/" className="d-none d-md-block">
				<NavbarBrand className={headerStyle.NavLink}>Akash</NavbarBrand>
			</Link>
			<Container>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<NavLink
							to="/"
							className={`nav-link mr-3 ${headerStyle.NavLink}`}
						>
							<FontAwesomeIcon icon={['fas', 'home']} size="1x" />{' '}
							Home
						</NavLink>
						<NavLink
							to="/projects"
							className={`nav-link mr-3 ${headerStyle.NavLink}`}
						>
							<FontAwesomeIcon
								icon={['fas', 'tasks']}
								size="1x"
							/>{' '}
							Projects
						</NavLink>
						<NavLink
							to="/about"
							className={`nav-link mr-3 ${headerStyle.NavLink}`}
						>
							<FontAwesomeIcon
								icon={['fas', 'user-plus']}
								size="1x"
							/>{' '}
							About Me
						</NavLink>
						<NavLink
							to="/contact"
							className={`nav-link mr-3 ${headerStyle.NavLink}`}
						>
							<FontAwesomeIcon
								icon={['fas', 'envelope']}
								size="1x"
							/>{' '}
							Contact Me
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Container>
	</Navbar>
);

export default Header;
