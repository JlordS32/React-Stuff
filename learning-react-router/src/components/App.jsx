import React from 'react';
import styles from '../styles/app.module.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

// Components
import Home from './home/Home';
import About from './about/About';
import RootLayout from './layout/RootLayout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
			</Route>
		)
	);

	return (
      <RouterProvider router={router} />
	);
}

export default App;
