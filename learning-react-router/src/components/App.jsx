import React, { useState } from 'react';
import styles from '../styles/app.module.css';
import Home from './home/Home';

function App() {
	return (
		<div className={styles['app']}>
			<header>
				<div>Some Logo</div>
				<nav>
					<div>Home</div>
					<div>Contact</div>
					<div>About</div>
				</nav>
			</header>
			<Home />
		</div>
	);
}

export default App;
