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
				</main>
			</div>
		</div>
	);
}

export default CareersLayout;
