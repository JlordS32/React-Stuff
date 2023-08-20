import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import styles from '../../styles/careers.module.css';

function CareersLayout() {
	return (
		<div className={styles['careers']}>
			<div className={styles['container']}>
				<h1>Careers</h1>
				<main>
					<section>
						<h2>Forge Your Path in Innovation: Join Our Team</h2>
						<p>
							Welcome to our Careers page, a gateway to a world where
							your technical prowess meets limitless opportunities. If
							you're driven by the thrill of solving intricate puzzles,
							coding the future, and shaping the digital landscape,
							you've come to the right place.
						</p>
						<h2>Why Choose Us as Your Next Destination?</h2>
						<p>
							At Conor Dream, we don't just offer jobs we present a
							canvas for innovation. As a technician, a programmer, a
							data enthusiast, or a burgeoning computer scientist, you're
							not a mere employee; you're a vital contributor to our
							dynamic tapestry. Join a community of like-minded
							individuals who are united by their passion for technology
							and a shared commitment to pushing boundaries.
						</p>
					</section>
					<section className={styles['careers-items-container']}>
						<Outlet />
					</section>

					<section>
						<h2>What Awaits You:</h2>
						<p>
							<strong>Challenging Projects:</strong> Dive into projects
							that test your skills and stretch your creativity. From
							developing cutting-edge applications to troubleshooting
							complex systems, every day is a new chance to thrive.
						</p>
						<p>
							<strong>Collaborative Culture</strong>: We believe that the
							best solutions emerge through collaboration. Our open and
							inclusive environment fosters teamwork, where ideas flow
							freely and innovation is a collective effort.
						</p>
						<p>
							<strong>Learning and Growth</strong>: Your journey doesn't
							end with the skills you bring. We invest in your growth,
							offering workshops, training, and resources to keep you at
							the forefront of the ever-evolving tech landscape.
						</p>
						<p>
							<strong>Impactful Work</strong>: Be a part of something
							bigger than yourself. Your contributions here have
							real-world implications, shaping industries, transforming
							user experiences, and driving technological progress.
						</p>
						<p>
							<strong>Flexibility</strong>: We understand the importance
							of work-life balance. With flexible work arrangements, you
							can tailor your schedule to suit your individual needs and
							optimize your productivity.
						</p>

						<h2>Join Our Team:</h2>
						<p>
							If you're ready to amplify your technical acumen, embrace
							innovation, and be part of a company that values your
							expertise, we invite you to explore our current openings.
							Your next adventure in technology awaits come and define
							the future with us at Conor Dream.
						</p>
					</section>
				</main>
			</div>
		</div>
	);
}

export default CareersLayout;
