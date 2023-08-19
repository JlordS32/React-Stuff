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
						<p>
							In sit pariatur ea sunt nisi ex aute anim eiusmod ut culpa.
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
