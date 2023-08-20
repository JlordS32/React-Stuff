import React from 'react';
import styles from '../../styles/career-details.module.css';
import { useLoaderData, useParams } from 'react-router-dom';

function CareerDetails() {
	const career = useLoaderData();

	return (
		<div className={styles['career-details']}>
			<div className={styles['container']}>
				<h2>Career Details</h2>
				<main>
					<section>
						<h2>Career details for {career.title}</h2>
						<p>Starting salary: {career.salary}</p>
						<p>Location: {career.location}</p>
						<div className='details'>
							<p>
								Do sit fugiat elit excepteur labore cupidatat sit do
								dolor consequat irure officia nulla. Aliquip dolore non
								pariatur sunt. Id incididunt anim aliquip aliqua
								occaecat amet ad culpa elit dolore.
							</p>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

export const careerDetailsLoader = async ({ params }) => {
	const { id } = params;

	const res = await fetch('http://localhost:4000/careers/' + id);
	const data = res.json();

	if (!res.ok) {
		throw Error('Could not find that career');
	}

	return data;
};

export default CareerDetails;
