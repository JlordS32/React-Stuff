import React from 'react';
import styles from '../../styles/app.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
	return (
		<div className={styles['app']}>
			<header>
				<NavLink
					className={styles['nav-logo']}
					to='/'
				>
					Conor Games 
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
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
