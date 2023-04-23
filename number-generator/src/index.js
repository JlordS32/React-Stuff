import React from 'react';
import ReactDOM from 'react-dom';

const color = {
  yellow: '#fddb3a',
  red: '#fd5e53',
  green: '#21bf73'
}

const Header = ({data: {
  title,
  subtitle
}}) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  )
}

const App = () => {

  const data = {
  title: '30 Days of React',
  subtitle: 'Number Generator'
  }

  return (
    <div className='container'>
      <div>
        <Header data={data}/>
      </div>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
