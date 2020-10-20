import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import TechStack from '../TechStack/TechStack';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Transition from '../../Hoc/Transition/Transition';

const MainApp = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Transition>
						<HomePage />
					</Transition>
				</Route>
				<Route path="/projects">
					<Transition>
						<Projects />
					</Transition>
				</Route>
				<Route path="/tech">
					<Transition>
						<TechStack />
					</Transition>
				</Route>
				<Route path="/">
					<Transition>
						<Contact />
					</Transition>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default MainApp;
