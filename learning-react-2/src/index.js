import React from 'react';
import ReactDOM from 'react-dom';

// String examples
/*
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
};

// Number examples

const Age = (props) => <div>The person is {props.age} years old</div>
const Weight = (props) => <div>The weight of the object on earth is {props.weight}kg</div>


// Array examples
const Skills = (props) => {
  const skillList = props.skills.map((skill) => <li>{skill}</li>)
  return <ul>{skillList}</ul>
}
*/

// Object examples
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName: first, lastName: last },
    date,
  }
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {first} {last}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
};

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3) + '.';
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date} ${year}`
}

const App = () => {
  // String examples
  /*
  const welcome = 'Welcome to 30 Days Of React';
  const title = 'Getting Started React';
  const subtitle = 'JavaScript Library'
  const firstName = 'Asabeneh';
  const lastName = 'Yetayeh';
  const date = 'Oct 4, 2020';

  <Header 
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
  */

  // Number Examples
  /*
  let currentYear = 2020;
  let birthYear = 1820;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 56;
  const weight = mass * gravity;

  <Age age={age} />
  <Weight weight={weight} />
  */

  // Array examples
  /*
  const skills = ['HTML', 'CSS', 'JS']
  <Skills skills={skills}/>
  */

  // Object examples
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
    <Header data={data} />
    </div>
  )
};



const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
