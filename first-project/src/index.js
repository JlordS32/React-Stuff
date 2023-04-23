// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import personImage from './images/jaylou.jpg';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';
import checkIcon from './images/checkicon.svg';


// JSX element, header
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const author = {
  firstName: 'Jaylou',
  lastName: 'Rasonabe',
}
const date = 'Oct 2, 2020';
const copyRight = 'Copyright 2020';

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
    </div>
  </main>
);

// Front end tech section
const frontEndTech = (
  <div class='frontEnd-container'>
    <h2><strong>Front End Technologies</strong></h2>
    <div className='frontEndImg'>
      <img src={cssLogo} alt='CSS Logo'/>
      <img src={htmlLogo} alt='HTML Logo'/>
      <img src={reactLogo} alt='React Logo'/>
    </div>
  </div>
)

// Subscription box
const subscriptionbox = (
    <div className='subscription-box'>
        <h1>Subscribe</h1>
        <p>Sign up with your email address to receive news and letters!</p>
        <div className='textbox-container'>
          <input type='text' placeholder='First Name'></input>
          <input type='text' placeholder='Last Name'></input>
          <input type='text' placeholder='Email'></input>
        </div>
        <button>Subscribe</button>
    </div>
)

const userCard = (
  <div class='userCard'>
    <div class='userCard-container'>
      <div className='author-details'>
        <img src={personImage} alt='Author Image'/>
        <div className='person-name'>
          <h2>{author.firstName} {author.lastName}</h2>
          <img src={checkIcon} alt='Check Icon'/>
        </div>
        <h3>Senior Developer, Finland</h3>
      </div>
      <div className='skills-container'>
        <h2>Skills</h2>
        <div className='skillsTag-container'>
          <div>HTML</div>
          <div>Sass</div>
        </div>
      </div>
      <div className='joined-date'>
        <p></p>
      </div>
    </div>
  </div>
)

const body = (
  <div>
    <div className='body-container'>
      {userCard}
      {frontEndTech}
      {subscriptionbox}
    </div>
  </div>
)

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>&copy; {copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {body}
    {footer}
  </div>
);

const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);