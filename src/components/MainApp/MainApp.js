import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import HomePage from '../HomePage/HomePage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Transition from '../../Hoc/Transition/Transition';
import PageNotFound from '../PageNotFound/PageNotFound';

const MainApp = () => {
	return (
		<BrowserRouter>
			<Layout>
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
					<Route path="/about">
						<Transition>
							<About />
						</Transition>
					</Route>
					<Route path="/contact">
						<Transition>
							<Contact />
						</Transition>
					</Route>
					<Route path="">
						<Transition>
							<PageNotFound />
						</Transition>
					</Route>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default MainApp;
