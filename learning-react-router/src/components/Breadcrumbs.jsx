import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/app.module.css';

function Breadcrumbs() {
	const location = useLocation();

	let currentLink = '';

	const crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb) => {
			currentLink += `/${crumb}`;

			return (
				<div
					key={crumb}
					className={styles['crumb']}
				>
					<Link to={currentLink}>{crumb}</Link>
				</div>
			);
		});

	return <div className={styles['breadcrumbs']}>{crumbs}</div>;
}

export default Breadcrumbs;
