import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import layoutStyle from './layout.module.css';

const Layout = (props) => (
	<div className={layoutStyle.Container}>
		<Header />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
