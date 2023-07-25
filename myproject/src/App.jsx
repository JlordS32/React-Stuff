import React from 'react';
import './style/app.modules.css';

export default function App() {
	return (
		<>
			<div className='app-container'>
				<div className='header-container'>This is a header</div>
				<div className='nav-container'>
               <div className='nav-items'>A</div>
               <div className='nav-items'>B</div>
               <div className='nav-items'>C</div>
            </div>
				<main>
					<div className='main-content'>
						<h1>About me</h1>
						<p>Some content here, random content</p>
					</div>
				</main>
				<footer>Jlord Style, Inc. &copy; All rights reserved.</footer>
			</div>
		</>
	);
}
