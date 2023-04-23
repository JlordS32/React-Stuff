import React from 'react';
import ReactDOM from 'react-dom';

const Numbers = ({numbers}) => {
  const list = numbers.map((number) => <li>{number}</li>);

  return list;
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='container'>
      <div>
        <h1>Numbered List</h1>
        <ul>
          <Numbers numbers={numbers}/>
        </ul>
      </div>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);