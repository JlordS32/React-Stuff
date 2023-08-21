import React, {useState} from 'react';
import styles from '../../styles/about.module.css';
import { Navigate } from 'react-router-dom';
import { scrollToTop } from '../careers/CareerDetails';

function About() {
	// const [user, setUser] = useState('mario');

	// if (!user) {
	// 	return <Navigate to="/" replace={true}/>
	// }
	scrollToTop();

	return (
		<div className={styles['about']}>
			<div className={styles['container']}>
				<h1>About</h1>
				<p>
					At Conor Dream, we are driven by a shared vision – a vision of
					turning dreams into reality. The "Dream" is not just a concept;
					it's the guiding star that fuels our innovation and propels us
					forward. We believe in the power of imagination, the magic of
					innovation, and the transformative potential of technology.
				</p>
				{/* <button onClick={() => setUser(null)}>Logout</button> */}
				<h2>A Hub of Possibilities:</h2>
				<p>
					Conor Dream serves as a hub where dreams intertwine with reality.
					Our ecosystem fosters a culture of continuous learning,
					exploration, and collaboration. From software development to data
					analysis, from AI to user experience design, we embrace diverse
					disciplines and perspectives, recognizing that the most
					remarkable innovations emerge at the intersection of different
					fields.
				</p>
				<h2>Your Dream, Our Purpose:</h2>
				<p>
					Ultimately, our purpose is to make your dream our own. We strive
					to create an environment where your aspirations are not just
					heard but amplified. Your vision becomes our roadmap, and
					together, we embark on a journey to reshape industries, improve
					lives, and leave an indelible mark on the world of technology.
				</p>
				<p>
					As you explore Conor Dream, you're not just joining a company –
					you're joining a movement. A movement fueled by the collective
					power of dreams, aspirations, and the unwavering belief that the
					impossible is merely a challenge waiting to be overcome.
				</p>
				<h1
					style={{
						margin: '0',
					}}
				>
					Innovation, Collaboration, Transformation: Our Pillars of
					Progress
				</h1>
				<main className={styles['main-page']}>
					<section>
						<h2>Innovation:</h2>
						<p>
							Innovation is the spark that ignites our imagination and
							propels us beyond the limits of today. It's the driving
							force behind every line of code, every algorithm, and every
							solution we create. We thrive on pioneering ideas that
							challenge conventions, disrupt industries, and set new
							benchmarks for excellence. At [Company Name], innovation
							isn't just a buzzword – it's the heartbeat of our progress.
						</p>
					</section>
					<section>
						<h2>Collaboration:</h2>
						<p>
							We believe in the power of diverse minds coming together to
							create something extraordinary. Collaboration isn't just a
							part of our process; it's our culture. We foster an
							environment where ideas flow freely, knowledge is shared
							openly, and each individual's expertise enriches the
							collective wisdom of the team. Together, we transform
							challenges into opportunities and co-create solutions that
							have a lasting impact.
						</p>
					</section>
					<section>
						<h2>Transformation:</h2>
						<p>
							Technology has the incredible ability to transform the way
							we live, work, and connect. At Conor Dream, we embrace this
							transformative potential with unwavering enthusiasm. From
							shaping industries to enhancing user experiences, we use
							technology as a catalyst for positive change. Our
							commitment to transformation extends beyond the digital
							realm, it's about elevating lives and leaving a legacy of
							progress.
						</p>
					</section>
				</main>
			</div>
		</div>
	);
}

export default About;
