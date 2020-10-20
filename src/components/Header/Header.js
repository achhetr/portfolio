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
							<NavLink to="/projects" className="nav-link">
								Projects
							</NavLink>
							<NavLink to="/tech" className="nav-link">
								Tech Stack
							</NavLink>
							<NavLink to="/contact" className="nav-link">
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
