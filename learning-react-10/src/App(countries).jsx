import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('I am always the first one to run this shit...')

    this.state = {
      firstName: 'John',
      data: [],
    }
  }

  /*
  static getDerivedStateFromProps(props, state) {
    console.log('I am a gerDerivedState.');
    return null;
  }
  */

  async componentDidMount() {
    console.log('I am a componentDidMount and I will be last to run...');

    const API_URL = 'https://restcountries.com/v3.1/region/europe';
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  

  renderCountries = () => {
    const data = this.state.data;

    const countries = Object.entries(data).map(([key, value]) => ({
      name: value.name.common,
      flags: value.flags,
      population: value.population,
      key: key,
    }))

    return countries.map((country) => {
      return (
        <div key={country.key}>
          <div>
            {' '}
            <img src={country.flags.png} alt={country.name.alt}/>
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Population: {country.population} </p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
             {this.renderCountries()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;