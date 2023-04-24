import React from 'react';
import ReactDOM from 'react-dom';

const color = {
  yellow: '#fddb3a',
  red: '#fd5e53',
  green: '#21bf73'
}

const primeColor = {
  backgroundColor: color.red
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const Header = ({data: {
  title,
  subtitle
}}) => {
  return (
    <header class='header-container'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  )
}

const Number = () => {
  const boxes = [];
  
  for (let i = 0; i <= 31; i++) {
    if (isPrime(i)) {
      boxes.push(<div key={i} style={primeColor}className='numbered-box'><span>{i}</span></div>);
    }

    else {
      boxes.push(<div key={i} style={{backgroundColor: i % 2 === 0 ? color.green : color.yellow}}className='numbered-box'><span>{i}</span></div>);
    }
  }

  return <div>{boxes}</div>;
};

const Boxes = () => {
  return (
    <div className='box-container'>
      <Number />
    </div>
  )
}


const App = () => {

  const data = {
  title: '30 Days Of React',
  subtitle: 'Number Generator'
  }

  return (
    <div className='app'>
      <div className='container'>
        <Header data={data}/>
        <Boxes />
      </div>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
