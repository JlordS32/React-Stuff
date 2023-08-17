import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<div>
			<h1>Too bad, page not found!</h1>
			<p>
				Sint sint ullamco non dolore. Excepteur pariatur nulla eiusmod et
				non aute fugiat ipsum aliqua dolor voluptate ea. Do commodo officia
				pariatur ullamco sunt. Fugiat in tempor nisi labore Lorem cupidatat
				ex dolore elit eiusmod. Elit laboris aliquip anim quis do.
			</p>

			<p>
				Go back to <Link path='/'>Home</Link>
			</p>
		</div>
	);
}

export default PageNotFound;
