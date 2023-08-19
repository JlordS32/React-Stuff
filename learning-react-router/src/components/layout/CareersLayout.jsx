import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../../styles/careeres.module.css';

function CareersLayout() {
	return (
		<div className={styles['careers']}>
			<h2>Careerss</h2>
			<p>In sit pariatur ea sunt nisi ex aute anim eiusmod ut culpa.</p>

			<Outlet />
		</div>
	);
}

export default CareersLayout;
