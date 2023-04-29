import React, { Component } from 'react';
import MainPage from './MainPage';
import CountryPage from './CountryPage';

class App extends Component{
    state = {
        showCountryComponent: false,
    }

    handleSwitchPage = () => {
        this.setState({
            showCountryComponent: true,
        })
    }

    render() {
        const data = {
            title: 'Europe Countries',
        }
        const showCountry = this.state.showCountryComponent ? 
        ( <CountryPage onButtonClick={this.handleSwitchPage}/> ) : (
            <MainPage onButtonClick={this.handleSwitchPage} title={data.title}/> );

        return (
            <div className='app'>
                {showCountry};
            </div>
        )
    }
}

export default App;