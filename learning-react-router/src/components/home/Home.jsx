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
				<section>
					<h1>Hello world</h1>
					<div className={styles['hero-content']}>
						Pariatur esse aliqua aliquip nisi id cupidatat excepteur
						voluptate ipsum. Voluptate commodo quis minim commodo. Enim
						incididunt aliquip voluptate consequat proident officia
						ullamco esse occaecat anim. Nisi in nostrud quis aliqua
						laborum minim laboris mollit quis est ad dolore nulla laborum.
						Duis incididunt sit in ad dolor.
					</div>
					<div className={styles['hero-content']}>
						Pariatur esse aliqua aliquip nisi id cupidatat excepteur
						voluptate ipsum. Voluptate commodo quis minim commodo. Enim
						incididunt aliquip voluptate consequat proident officia
						ullamco esse occaecat anim. Nisi in nostrud quis aliqua
						laborum minim laboris mollit quis est ad dolore nulla laborum.
						Duis incididunt sit in ad dolor.
					</div>
				</section>
			</main>
		</div>
	);
}

export default Home;
