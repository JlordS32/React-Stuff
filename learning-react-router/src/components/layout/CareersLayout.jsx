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
						<p>
							Anim ad do dolore laboris eu laboris commodo exercitation Lorem eu nostrud. Reprehenderit ex id culpa nostrud ea minim aliqua esse do do veniam duis. Amet magna do aute laboris do laborum incididunt consectetur eu dolor incididunt enim magna consequat. Laboris do laborum eiusmod ex. Ad ullamco consequat eu mollit eu Lorem magna laborum cupidatat incididunt. Exercitation anim laborum excepteur aute magna proident mollit elit veniam. Id nulla reprehenderit ex reprehenderit deserunt sit ad pariatur sunt ea et magna non labore.
						</p>
					</section>
					<section className={styles['careers-items-container']}>
						<Outlet />
					</section>
				</main>
			</div>

			<footer>
				&copy; Copyright 2023, Conor Goulding. All rights reserved.
			</footer>
		</div>
	);
}

export default CareersLayout;
