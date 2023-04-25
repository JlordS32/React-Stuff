import React from 'react';
import ReactDOM from 'react-dom';
import { tenHighestPopulation } from './population.js';

const worldPopulation = tenHighestPopulation[0].population;

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

function calculatePercentage (percentage) {
  
  const calculatedPercentage = percentage/worldPopulation * 100;
  const formattedPercentage = `${calculatedPercentage}%`

  return formattedPercentage;
}

const Countries = () => {
  return (
    tenHighestPopulation.map((country) => {
      return (
        <div className='country'>
        <span className='country-name'>
          {country.country}
        </span>

        <div className='country-bar'>
          <div className='bar' style={{width: calculatePercentage(country.population)}}></div>
        </div>

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