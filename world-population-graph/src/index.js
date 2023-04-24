import React from 'react';
import ReactDOM from 'react-dom';
import { tenHighestPopulation } from './population.js';

const [world, china, india, usa, indonesia, brazil, pakistan, nigeria, bangladesh, russia, japan] = tenHighestPopulation;

const Header = ({
  data: {
    title, 
    subtitle
  }
}) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  )
}

const Countries = () => {
  return (
    tenHighestPopulation.map((country) => {
      return (
        <div className='country'>
        <span className='country-name'>
          {country.country}
        </span>
        {country.country === 'World' ? (
          <div className='country-bar' style={{backgroundColor: '#FF5733'}}></div>
        ) : (
          <div className='country-bar'></div>
        )}
        <span className='number-population'>
          {country.population.toLocaleString('en-US')}
        </span>
        </div>
      )
    })
  )
}

const Body = () => {
  return (
    <div className='body-container'>
      <Countries />
    </div>
  )
}

const App = () => {
  const data = {
    title: 'World Population',
    subtitle: 'Ten most populated countries'
  }
  return (
    <div className='app'>
      <div className='container'>
        <Header data={data} />
        <Body />
      </div>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);