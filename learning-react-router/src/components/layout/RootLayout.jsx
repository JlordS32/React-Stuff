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
					Dream
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
		</div>
	);
}

export default RootLayout;
