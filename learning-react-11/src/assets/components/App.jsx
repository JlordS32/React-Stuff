import React, { Component } from 'react';
import MainPage from './main-page/MainPage';
import CountryPage from './country-page/CountryPage';

class App extends Component {
  state = {
    selectedCountry: null,
  };

  handleCountrySelection = (country) => {
    this.setState({
      selectedCountry: country,
    });
  };

  handleCountryDeselection = () => {
    this.setState({
      selectedCountry: null,
    });
  };

  render() {
    const selectedCountry = this.state.selectedCountry;
    const data = {
      title: 'Europe Countries',
    };

    return (
      <div className="app">
        {selectedCountry ? (
          <CountryPage
            country={selectedCountry}
            onDeselect={this.handleCountryDeselection}
          />
        ) : (
          <MainPage
            onCountrySelect={this.handleCountrySelection}
            title={data.title}
          />
        )}
      </div>
    );
  }
}

export default App;
