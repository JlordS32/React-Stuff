import React from 'react';
import './style/app.modules.css';

export default function App() {
	return (
		<div className='app-container'>
			<div className='header-container'>This is a header</div>
			<main>
				<h1>About me</h1>
				<p>Some content here, random content</p>
			</main>
			<footer>Jlord Style, Inc. &copy; All rights reserved.</footer>
		</div>
	);
}
