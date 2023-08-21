import React, { useEffect, useMemo } from 'react';
import styles from '../../styles/careers.module.css';
import { useLoaderData, Link } from 'react-router-dom';
import { scrollToTop } from './CareerDetails';
import { useQuery } from 'react-query';

function Careers({ fetchCareers, fetchCareersById }) {
	// TODO memoize/cache API Calls
	scrollToTop();
	const { isLoading, data, error, status } = useQuery('careers', fetchCareers);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (status === 'error') {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			{data?.map((career) => {
				return (
					<CareerItem
						career={career}
						fetchCareersById={fetchCareersById}
					/>
				);
			})}
		</>
	);
}

function CareerItem({ career, fetchCareersById }) {
	const { id } = career;
	const { data, isLoading } = useQuery(['career', id], () =>
		fetchCareersById(id)
	);

	return (
		<div
			className={styles['career-item']}
			key={id}
		>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<Link to={data.id.toString()}>
					<h2>{data.title}</h2>
					<p>Based in {data.location}</p>
				</Link>
			)}
		</div>
	);
}

export default Careers;
