import React from 'react';
import { Navbar, Nav, NavbarBrand, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Link to="/">
					<NavbarBrand>Akash</NavbarBrand>
				</Link>
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<NavLink to="/" className="nav-link mr-3">
								Home
							</NavLink>
							<NavLink to="/projects" className="nav-link mr-3">
								Projects
							</NavLink>
							<NavLink to="/about" className="nav-link mr-3">
								About Me
							</NavLink>
							<NavLink to="/contact" className="nav-link mr-3">
								Contact Me
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Container>
		</Navbar>
	);
};

export default Header;
