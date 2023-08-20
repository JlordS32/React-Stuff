import React from 'react';
import styles from '../../styles/home.module.css';

function Home() {
	return (
		<div className={styles['home']}>
			<section>
				<div className={styles['hero-title']}>The dream!</div>
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

				<section className={styles['livingthedream']}>
					<h1>"&nbsp;I... Conor Goulding</h1>
					<h2>
						have a{' '}
						<span
							style={{
								fontFamily: 'Satisfy, cursive',
							}}
						>
							&nbsp;dream&nbsp;
						</span>
						...&nbsp;"
					</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/YFOhH_3Zfs8'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
				</section>

				<section className={styles['thedream']}>
					<h2>What is a dream?</h2>
					<p>
						A dream, a radiant beacon born from the union of desire and
						potential, blooms within the hidden chambers of the night. It
						unfolds as a canvas where aspirations, unrestrained by the
						world's boundaries, paint a portrait of what could be. In
						slumber's tender grasp, the ordinary yields to the
						extraordinary, and the heart's fervent yearnings take center
						stage in a symphony of possibility.
					</p>

					<p>
						In this nocturnal sanctuary, dreams unfurl as tapestries of
						ambition, each thread woven from the fabric of the soul's
						deepest wishes. As the conscious world takes respite, the
						subconscious takes flight, weaving tales of triumph and
						audacity against the backdrop of a star-strewn sky. These
						dreams are echoes of the heights the heart dares to reach, a
						testament to the spirit's unwavering resolve to forge new
						paths and grasp the intangible stars of the future.
					</p>

					<p>
						Though shrouded in mystery, dreams are the whisper of the
						soul's deepest desires, beckoning us to the edges of our
						comfort zones. They carry us beyond the confines of reality,
						into a domain where limitations fade like morning mist. In the
						tapestry of slumber, dreams become the bridge between what is
						and what could be, inviting us to embrace the audacious, to
						chase the elusive, and to sculpt our aspirations into the
						tangible fabric of our lives.
					</p>
				</section>

				<section className={styles['endofthedream']}>
					<div className={styles['profile']}>
						<img
							src='https://conorcgoulding.vercel.app/conor.png'
							alt='Conor Picture'
							style={{
								borderRadius: '100%',
								width: '300px',
							}}
						/>
						<p>Conor Goulding. Pacific Data Solutions.</p>
					</div>
					<h1>Keep dreaming!!!</h1>
				</section>
			</main>

			<footer>
				&copy; Copyright 2023, Conor Goulding. All rights reserved.
			</footer>
		</div>
	);
}

export default Home;
