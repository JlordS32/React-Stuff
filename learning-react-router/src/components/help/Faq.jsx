import React from 'react';
import styles from '../../styles/help.module.css';

function Faq() {
	return (
		<div className={styles['faq']}>
			<h1>FAQs</h1>
			<p>
				Technology often presents intricate challenges, and our FAQs page
				aims to unravel those complexities in a way that's accessible and
				insightful. We believe that understanding the "why" and "how" is as
				important as the "what," and our FAQs provide that comprehensive
				perspective.
			</p>
			<main>
				<section>
					<h2>
						Q: What is the importance of version control in programming?
					</h2>
					<p>
						A: Version control is a crucial aspect of programming that
						allows multiple developers to collaborate on a project while
						tracking changes, ensuring code integrity, and facilitating
						seamless teamwork.
					</p>

					<h2>
						Q: How can I optimize database queries for better performance?
					</h2>
					<p>
						A: Database query optimization involves techniques such as
						index optimization, query rewriting, and caching to enhance
						the speed and efficiency of data retrieval from databases.
					</p>

					<h2>Q: What are some best practices for network security?</h2>
					<p>
						A: Database query optimization involves techniques such as
						index optimization, query rewriting, and caching to enhance
						the speed and efficiency of data retrieval from databases.
					</p>

					<h2>Q: Ut officia quis culpa labore consectetur nisi cupidatat?</h2>
					<p>
						A: In deserunt dolor eu voluptate dolor dolore magna ullamco
						fugiat.
					</p>
				</section>
			</main>
		</div>
	);
}

export default Faq;
