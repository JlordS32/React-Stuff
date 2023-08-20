import React from 'react';
import styles from '../../styles/career-details.module.css';
import { useLoaderData, useParams } from 'react-router-dom';

function CareerDetails() {
	const career = useLoaderData();

	return (
		<div className={styles['career-details']}>
			<div className={styles['container']}>
				<h2>Details</h2>
				<main>
					<section>
						<h2>{career.title}</h2>
						<p>
							Starting salary: <strong>${career.salary}</strong>
						</p>
						<p>Location: {career.location}</p>
						<div className='details'>
							<h3>Description: </h3>
							<p>{career.description} Proident voluptate occaecat irure aliqua proident elit esse qui nisi deserunt. Id consequat qui occaecat aliqua dolor exercitation amet sint ullamco sit eiusmod officia sit laboris. Excepteur irure laborum deserunt enim labore eiusmod. Aliquip aliquip minim sunt quis nulla officia ipsum.</p>

							<p>Dolore culpa cupidatat adipisicing aute veniam Lorem aliquip. Amet aute exercitation esse laborum. Lorem veniam exercitation tempor magna ipsum magna esse eu in commodo et ipsum mollit.Fugiat Lorem nostrud velit esse quis aute velit tempor magna. Incididunt consectetur quis id velit cillum mollit. In adipisicing et dolor fugiat proident aute anim nostrud. Consectetur consequat do aliqua dolore do cillum labore. Anim dolore occaecat reprehenderit esse voluptate ad sunt nisi laborum. Exercitation cillum quis exercitation nulla in amet enim aliquip eu anim veniam ullamco consectetur.</p>

							<h3>
								Duis deserunt excepteur laboris cillum dolor id ea ad
								aute proident ea tempor esse?
							</h3>
							<p>
								Dolore fugiat qui sunt elit officia magna elit
								exercitation quis eiusmod dolor et non. Quis sunt aute
								tempor pariatur nulla non ea non proident. Minim commodo
								adipisicing ea anim occaecat sunt laboris culpa sunt
								tempor. Commodo officia proident sunt nostrud minim id.
							</p>

							<h3>
								Nostrud amet sunt labore mollit anim sunt. Dolore
								excepteur consectetur laboris cupidatat excepteur ea
								laboris. Ad occaecat dolore laboris eiusmod occaecat.
								Velit enim cupidatat dolore tempor minim elit eiusmod?
							</h3>
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

	const res = await fetch('https://careersapi.vercel.app/api/careers/' + id);
	const data = res.json();

	if (!res.ok) {
		throw Error('Could not find that career');
	}

	return data;
};

export default CareerDetails;
