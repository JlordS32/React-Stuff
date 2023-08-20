import React from 'react';
import styles from '../../styles/app.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

function RootLayout() {
	return (
		<div className={styles['app']}>
			<header>
				<NavLink
					className={styles['nav-logo']}
					to='/'
				>
					Conor Dream
				</NavLink>
				<nav>
					<NavLink
						className={styles['nav-items']}
						to='/'
					>
						Home
					</NavLink>
					<NavLink
						className={styles['nav-items']}
						to='about'
					>
						About
					</NavLink>
					<NavLink
						className={styles['nav-items']}
						to='help'
					>
						Help
					</NavLink>
					<NavLink
						className={styles['nav-items']}
						to='careers'
					>
						Careers
					</NavLink>
				</nav>
			</header>
			<main>
				<Breadcrumbs />
				<Outlet />
			</main>

			<footer>
				&copy; Copyright 2023, Conor Goulding. All rights reserved.
			</footer>
		</div>
	);
}

export default RootLayout;
