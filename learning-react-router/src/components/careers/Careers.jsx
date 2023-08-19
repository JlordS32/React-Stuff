import React, { useEffect } from 'react';
import styles from '../../styles/careers.module.css';
import { useLoaderData, Link } from 'react-router-dom';

function Careers() {
	const careers = useLoaderData();

	return (
		<>
			{careers?.map((career) => {
				return (
					<div className={styles['career-item']}>
						<Link
							to='/'
							key={career.id}
						>
							<h2>{career.title}</h2>
							<p>Based in {career.location}</p>
						</Link>
					</div>
				);
			})}
		</>
	);
}

export const careersLoader = async () => {
	const res = await fetch('http://localhost:4000/careers');

	const data = await res.json();

	return data;
};

export default Careers;
