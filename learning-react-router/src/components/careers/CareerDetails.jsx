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

							<h2>
								Duis deserunt excepteur laboris cillum dolor id ea ad
								aute proident ea tempor esse?
							</h2>
							<p>
								Dolore fugiat qui sunt elit officia magna elit
								exercitation quis eiusmod dolor et non. Quis sunt aute
								tempor pariatur nulla non ea non proident. Minim commodo
								adipisicing ea anim occaecat sunt laboris culpa sunt
								tempor. Commodo officia proident sunt nostrud minim id.
							</p>

							<h2>
								Nostrud amet sunt labore mollit anim sunt. Dolore
								excepteur consectetur laboris cupidatat excepteur ea
								laboris. Ad occaecat dolore laboris eiusmod occaecat.
								Velit enim cupidatat dolore tempor minim elit eiusmod?
							</h2>
							<p>
								Irure commodo magna non ut. Mollit velit minim ut id
								quis nulla aliqua qui esse dolore esse aliqua veniam
								non. Enim ex magna in aliquip dolor incididunt ea
								officia sit. Cupidatat sint sunt labore labore esse enim
								ullamco enim amet do. Dolor Lorem excepteur officia amet
								ex veniam non non irure tempor mollit eu officia.
							</p>

							<p>
								Id est pariatur occaecat occaecat excepteur aliqua Lorem
								nostrud consectetur ad. Amet ullamco consequat id
								pariatur exercitation ut do elit ullamco nulla dolore
								exercitation. Occaecat deserunt cillum esse do nisi
								commodo consectetur. Proident sit eiusmod irure
								voluptate deserunt in est. Consequat sunt veniam est
								culpa cillum anim. Occaecat irure ullamco minim velit
								tempor adipisicing enim esse in.
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
