import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Faq from './Faq';
import Contact from './Contact';
import styles from '../../styles/help.module.css';
import { scrollToTop } from '../careers/CareerDetails';

function Help() {
	scrollToTop();
	return (
		<div className={styles['help']}>
			<div className={styles['container']}>
				<h1>Help</h1>
				<main>
					<section>
						<p>
							Pariatur occaecat esse laboris irure voluptate mollit
							occaecat dolore eiusmod id labore. Minim aliquip elit irure
							exercitation non. Dolore velit aute deserunt elit eu do
							amet do occaecat mollit eiusmod adipisicing Lorem. Esse
							cupidatat amet consequat excepteur ipsum excepteur labore
							eu incididunt. Ad irure officia est nostrud adipisicing
							aliquip cupidatat duis amet sit. Nisi cillum in fugiat
							dolore commodo ex laboris. Mollit consectetur consectetur
							sunt in ut veniam aliqua aliqua qui aute anim ipsum tempor
							adipisicing.
						</p>
					</section>

					<section>
						<nav className={styles['nav-link']}>
							<NavLink
								to='faq'
								className={styles['nav-items']}
							>
								View the FAQ
							</NavLink>
							<NavLink
								to='contact'
								className={styles['nav-items']}
							>
								Contact Us
							</NavLink>
						</nav>
					</section>

					<section>
						<Outlet />
					</section>
				</main>
			</div>
		</div>
	);
}

export default Help;
