import React, { useEffect, useMemo } from 'react';
import styles from '../../styles/careers.module.css';
import { useLoaderData, Link } from 'react-router-dom';
import { scrollToTop } from './CareerDetails';

function Careers() {
	const careers = useLoaderData();

	// TODO memoize/cache API Calls
	scrollToTop();

	return (
		<>
			{useMemo(() => {
				return careers?.map((career) => {
					return (
						<div
							className={styles['career-item']}
							key={career.id}
						>
							<Link to={career.id.toString()}>
								<h2>{career.title}</h2>
								<p>Based in {career.location}</p>
							</Link>
						</div>
					);
				});
			}, [careers])}
		</>
	);
}

export const careersLoader = async () => {
	const res = await fetch('https://careersapi.vercel.app/api/careers');

	console.log('I have been ran');

	const data = await res.json();

	if (!res.ok) {
		throw Error('Could not find fetch careers!');
	}

	return data;
};

export default Careers;
