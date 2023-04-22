// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import asabenehImage from './images/asabeneh.jpg';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';

// JSX element, header
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
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

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh image' />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
    </div>
  </main>
);

// following images
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

const body = (
  <div>
    {frontEndTech}
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