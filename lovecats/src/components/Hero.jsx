import React from "react";
import '../styles/hero.modules.css';
import catImg from '../assets/cat2.png'

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-details">
                <div className="hero-icons">
                    <img src={catImg} alt="cat picture"/>
                </div>
                <div className="hero-call-to-action">
                    <h1>Why choose us?</h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dolor facilis unde quis voluptatibus dolore animi autem quibusdam sunt dolores placeat minus nihil corrupti ipsam veniam non tenetur, impedit architecto ullam necessitatibus voluptate natus! In consectetur deserunt obcaecati quae architecto ea eligendi distinctio quis sequi quia dolorum a, possimus error?
                    </p>
                    <button>Try now!</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;