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
import Careers from './careers/Careers';
import CareerDetails from './careers/CareerDetails';
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

		if (!res.ok) {
			throw Error('API call failed. Please check the url.');
		}

		return data;
	};

	const fetchCareersById = async (id) => {
		const res = await fetch(`http://careersapi.vercel.app/api/careers/${id}`);
		const data = res.json();

		if (!res.ok) {
			throw Error('Could not find that career');
		}

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
					errorElement={
						<CareerNotFound
							fetchCareersById={fetchCareersById}
							fetchCareers={fetchCareers}
						/>
					}
				>
					<Route
						index
						element={
							<Careers
								fetchCareers={fetchCareers}
								fetchCareersById={fetchCareersById}
							/>
						}
					/>

					<Route
						path=':id'
						element={<CareerDetails fetchCareersById={fetchCareersById} />}
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
