// To get the root element from the HTML document
const rootElement = document.querySelector('.root')

// data
const welcome = 'Welcome to 30 Days Of React uwu';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const date = 'Oct 1, 2020';
const author = {
    firstname: 'Asabeneh',
    lastname: 'Yetayeh'
}
const currentDate = new Date().getDate();

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.firstname} {author.lastname}</p>
      <small>Date: {date}</small>
      <small>Current Date: {currentDate}</small>
    </div>
  </header>
)

const techs = ['HTML', 'Javascript', 'CSS']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
      </p>
      <ul>
        {techsFormatted}
      </ul>
    </div>
  </main>
)

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)