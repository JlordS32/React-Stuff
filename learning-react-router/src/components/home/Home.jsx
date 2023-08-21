import React from 'react';
import styles from '../../styles/home.module.css';
import { scrollToTop } from '../careers/CareerDetails';

function Home() {

	scrollToTop();

	return (
		<div className={styles['home']}>
			<section>
				<div className={styles['hero-title']}>The dream!</div>
				<div className={styles['hero-content']}>
					Step into a realm where possibilities know no bounds. "The Dream"
					invites you to venture into a world of endless horizons, where
					your aspirations take flight and your ambitions find their wings.
					With every heartbeat, "The Dream" encapsulates the essence of
					exploration, pushing the boundaries of what you thought was
					achievable. Experience a symphony of innovation and passion,
					where your desires and determination converge to create a new
					reality. Join us in shaping a tomorrow that is painted with the
					colors of your boldest visions.
				</div>
			</section>

			<main>
				<article>
					<section>
						<h2>Unveiling the Canvas of Possibility</h2>
						<p>
							"The Dream" is not just a concept – it's a canvas waiting
							to be painted with the hues of your imagination. In this
							captivating landscape, the limitations of today are mere
							stepping stones to the boundless opportunities of tomorrow.
							With each stroke of innovation, "The Dream" transforms the
							ordinary into the extraordinary, breathing life into ideas
							that were once thought to be beyond reach. Whether you're a
							creator, a thinker, or a pioneer, this is your realm to
							shape, mold, and redefine what's possible.
						</p>
					</section>
					<section>
						<h2 className={styles['spacing']}>
							Navigating the Constellations of Ambition
						</h2>
						<p>
							Guided by the North Star of ambition, "The Dream" charts a
							course through the constellations of your desires. It's a
							celestial journey that aligns your aspirations with the
							universe's grand design. As you navigate this cosmos of
							potential, every challenge becomes a launchpad, and
							setbacks are mere interludes in your epic narrative. "The
							Dream" beckons you to follow your own constellation,
							forging a path that is uniquely yours – one that sparkles
							with the brilliance of achievement and the determination to
							reach for the stars.
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
		</div>
	);
}

export default Home;
