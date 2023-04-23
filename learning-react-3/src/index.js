import React from 'react';
import ReactDOM from 'react-dom';

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

const Skill = ({skill: [tech, level]}) => (
  <li>
    {tech} {level}
  </li>
)

const Skills = ({skills}) => {
  const skillsList = skills.map((skill) => 
  <Skill skill={skill} />);
  return <ul>{skillsList}</ul>
}

const App = () => {
  return (
    <div className='container'>
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);