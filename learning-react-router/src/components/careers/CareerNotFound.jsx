import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

function CareerNotFound() {
	const error = useRouteError();

	return (
		<div className='career-error'>
			<h1>Oops... Error</h1>
			<p>{error.message}</p>
			<Link to='/'>Back to the homepage.</Link>
		</div>
	);
}

export default CareerNotFound;
