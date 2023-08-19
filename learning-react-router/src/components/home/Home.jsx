import React from 'react';
import styles from '../../styles/home.module.css';

function Home() {
	return (
		<div className={styles['home']}>
			<section>
				<div className={styles['hero-title']}>Welcome home!</div>
				<div className={styles['hero-content']}>
					Pariatur esse aliqua aliquip nisi id cupidatat excepteur
					voluptate ipsum. Voluptate commodo quis minim commodo. Enim
					incididunt aliquip voluptate consequat proident officia ullamco
					esse occaecat anim. Nisi in nostrud quis aliqua laborum minim
					laboris mollit quis est ad dolore nulla laborum. Duis incididunt
					sit in ad dolor.
				</div>
			</section>

			<main>
				<article>
					<section>
						<h2>This is heading 1</h2>
						<p>
							Pariatur esse aliqua aliquip nisi id cupidatat excepteur
							voluptate ipsum. Voluptate commodo quis minim commodo. Enim
							incididunt aliquip voluptate consequat proident officia
							ullamco esse occaecat anim. Nisi in nostrud quis aliqua
							laborum minim laboris mollit quis est ad dolore nulla
							laborum. Duis incididunt sit in ad dolor.
						</p>
					</section>
					<section>
						<h2 className={styles['spacing']}>This is heading 2</h2>
						<p>
							Pariatur esse aliqua aliquip nisi id cupidatat excepteur
							voluptate ipsum. Voluptate commodo quis minim commodo. Enim
							incididunt aliquip voluptate consequat proident officia
							ullamco esse occaecat anim. Nisi in nostrud quis aliqua
							laborum minim laboris mollit quis est ad dolore nulla
							laborum. Duis incididunt sit in ad dolor.
						</p>
					</section>
				</article>
			</main>

			<footer>
				&copy; Copyright 2023, Conor Goulding. All rights reserved.
			</footer>
		</div>
	);
}

export default Home;
