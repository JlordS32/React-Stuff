import React from 'react';
import ReactDOM from 'react-dom';

const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => {
    return <li key={number}>{number}</li>
  })

  return list;
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6]

  return (
    <div className='container'>
      <div>
      <h1>Number List</h1>
      <Numbers numbers={numbers} />
      </div>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);