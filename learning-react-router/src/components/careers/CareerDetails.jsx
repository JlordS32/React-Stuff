import React from 'react';
import styles from '../../styles/career-details.module.css';
import { useLoaderData, useParams } from 'react-router-dom';

// Scroll to the top of the page
export function scrollToTop() {
	window.scrollTo({
		top: 0, // Add smooth scrolling animation
	});
}

function CareerDetails() {
	const career = useLoaderData();

	// Call the scrollToTop function when needed
	scrollToTop();

	return (
		<div className={styles['career-details']}>
			<div className={styles['container']}>
				<h2>Details: </h2>
				<main>
					<section>
						<h2>{career.title}</h2>
						<p>
							Starting salary: <strong>${career.salary}</strong>
						</p>
						<p>Location: {career.location}</p>
						<div className='details'>
							<h3>Description: </h3>
							<p>
								{career.description} Proident voluptate occaecat irure aliqua
								proident elit esse qui nisi deserunt. Id consequat qui occaecat
								aliqua dolor exercitation amet sint ullamco sit eiusmod officia
								sit laboris. Excepteur irure laborum deserunt enim labore
								eiusmod. Aliquip aliquip minim sunt quis nulla officia ipsum.
							</p>

							<p>
								Dolore culpa cupidatat adipisicing aute veniam Lorem aliquip.
								Amet aute exercitation esse laborum. Lorem veniam exercitation
								tempor magna ipsum magna esse eu in commodo et ipsum
								mollit.Fugiat Lorem nostrud velit esse quis aute velit tempor
								magna. Incididunt consectetur quis id velit cillum mollit. In
								adipisicing et dolor fugiat proident aute anim nostrud.
								Consectetur consequat do aliqua dolore do cillum labore. Anim
								dolore occaecat reprehenderit esse voluptate ad sunt nisi
								laborum. Exercitation cillum quis exercitation nulla in amet
								enim aliquip eu anim veniam ullamco consectetur.
							</p>

							<h3>
								Duis deserunt excepteur laboris cillum dolor id ea ad aute
								proident ea tempor esse?
							</h3>
							<p>
								Dolore fugiat qui sunt elit officia magna elit exercitation quis
								eiusmod dolor et non. Quis sunt aute tempor pariatur nulla non
								ea non proident. Minim commodo adipisicing ea anim occaecat sunt
								laboris culpa sunt tempor. Commodo officia proident sunt nostrud
								minim id.
							</p>

							<h3>
								Nostrud amet sunt labore mollit anim sunt. Dolore excepteur
								consectetur laboris cupidatat excepteur ea laboris. Ad occaecat
								dolore laboris eiusmod occaecat. Velit enim cupidatat dolore
								tempor minim elit eiusmod?
							</h3>
							<p>
								Irure commodo magna non ut. Mollit velit minim ut id quis nulla
								aliqua qui esse dolore esse aliqua veniam non. Enim ex magna in
								aliquip dolor incididunt ea officia sit. Cupidatat sint sunt
								labore labore esse enim ullamco enim amet do. Dolor Lorem
								excepteur officia amet ex veniam non non irure tempor mollit eu
								officia.
							</p>

							<p>
								Id est pariatur occaecat occaecat excepteur aliqua Lorem nostrud
								consectetur ad. Amet ullamco consequat id pariatur exercitation
								ut do elit ullamco nulla dolore exercitation. Occaecat deserunt
								cillum esse do nisi commodo consectetur. Proident sit eiusmod
								irure voluptate deserunt in est. Consequat sunt veniam est culpa
								cillum anim. Occaecat irure ullamco minim velit tempor
								adipisicing enim esse in.
							</p>
						</div>
					</section>
				</main>

				<section>
					<h2>What Awaits You:</h2>
					<p>
						<strong>Challenging Projects:</strong> Dive into projects that test
						your skills and stretch your creativity. From developing
						cutting-edge applications to troubleshooting complex systems, every
						day is a new chance to thrive.
					</p>
					<p>
						<strong>Collaborative Culture</strong>: We believe that the best
						solutions emerge through collaboration. Our open and inclusive
						environment fosters teamwork, where ideas flow freely and innovation
						is a collective effort.
					</p>
					<p>
						<strong>Learning and Growth</strong>: Your journey doesn't end with
						the skills you bring. We invest in your growth, offering workshops,
						training, and resources to keep you at the forefront of the
						ever-evolving tech landscape.
					</p>
					<p>
						<strong>Impactful Work</strong>: Be a part of something bigger than
						yourself. Your contributions here have real-world implications,
						shaping industries, transforming user experiences, and driving
						technological progress.
					</p>
					<p>
						<strong>Flexibility</strong>: We understand the importance of
						work-life balance. With flexible work arrangements, you can tailor
						your schedule to suit your individual needs and optimize your
						productivity.
					</p>

					<h2>Join Our Team:</h2>
					<p>
						If you're ready to amplify your technical acumen, embrace
						innovation, and be part of a company that values your expertise, we
						invite you to explore our current openings. Your next adventure in
						technology awaits come and define the future with us at Conor Dream.
					</p>
				</section>
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
