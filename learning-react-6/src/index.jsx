// index.js
import React from 'react';
import ReactDOM from 'react-dom';

// Fuction to show month date year
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);