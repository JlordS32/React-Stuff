import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Faq from './Faq';
import Contact from './Contact';

function Help() {
	return (
		<div>
			<h1>Welcome to help</h1>
         <p>Pariatur occaecat esse laboris irure voluptate mollit occaecat dolore eiusmod id labore. Minim aliquip elit irure exercitation non. Dolore velit aute deserunt elit eu do amet do occaecat mollit eiusmod adipisicing Lorem. Esse cupidatat amet consequat excepteur ipsum excepteur labore eu incididunt. Ad irure officia est nostrud adipisicing aliquip cupidatat duis amet sit. Nisi cillum in fugiat dolore commodo ex laboris. Mollit consectetur consectetur sunt in ut veniam aliqua aliqua qui aute anim ipsum tempor adipisicing.</p>

         <nav>
            <NavLink to='faq' >View the FAQ</NavLink>
            <NavLink to='contact' >Contact Us</NavLink>
         </nav>

         <Outlet />
		</div>
	);
}

export default Help;
