import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route />
		</BrowserRouter>
	</Provider>
);

