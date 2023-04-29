import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('I am  the constructor and  I will be the first to run.');
    this.state = {
      firstName: 'John',
      data: [],
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, prevProps);
    console.log('hey');
  }
  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    )
  }
}

export default App;