import React from 'react';
import AppRouter from './AppRouter/AppRouter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const App = () => {
	return <AppRouter />;
};

export default App;
