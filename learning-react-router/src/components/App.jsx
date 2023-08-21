import React from 'react';
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
import Careers, { careersLoader } from './careers/Careers';
import CareerDetails, { careerDetailsLoader } from './careers/CareerDetails';
import CareerNotFound from './careers/CareerNotFound';

// React Query
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRouter />
		</QueryClientProvider>
	);
}

function AppRouter() {
	
	const fetchCareers = async () => {
		const res = await fetch('http://careersapi.vercel.app/api/careers');
		const data = await res.json();

		return data;
	};
	
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
						path='faq'
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
					loader={fetchCareers}
					errorElement={<CareerNotFound />}
				>
					<Route
						index
						element={<Careers />}
						loader={fetchCareers}
					/>

					<Route
						path=':id'
						element={<CareerDetails />}
						loader={careerDetailsLoader}
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
