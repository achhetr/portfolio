import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainApp from '../components/MainApp/MainApp';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	);
};

export default AppRouter;
