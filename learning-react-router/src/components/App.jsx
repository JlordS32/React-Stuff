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
import Help from './help/Help';
import PageNotFound from './layout/PageNotFound';
import RootLayout from './layout/RootLayout';
import Faq from './help/Faq';
import Contact from './help/Contact';
import CareersLayout from './layout/CareersLayout';
import Careers from './careers/Careers';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path='/'
				element={<RootLayout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
				<Route
					path='help'
					element={<Help />}
				>
					<Route
						index
						element={<Faq />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
				</Route>
				<Route
					path='careers'
					element={<CareersLayout />}
				>
					<Route
						index
						element={<Careers />}
					/>
				</Route>

				<Route
					path='*'
					element={<PageNotFound />}
				/>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
