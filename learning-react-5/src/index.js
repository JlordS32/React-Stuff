import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <header className='header-wrapper'>
        <h1>Hello World!</h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
