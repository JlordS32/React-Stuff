import React, { Component } from 'react';
import '../../styles/country.module.scss';


class Country extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.onDeselect();
    }
    render() {
        const {
            name,
            flags,
            population,
            languages,
            key,
            capital,
            subRegion,
            coatOfArms,
            timezone,
        } = this.props.country;

        const languageEntries = Object.entries(languages).map(([key, value]) => {
            return value;
        })
        
        const formattedLanguage = languageEntries
            .map((name) => name)
            .join(', ');

        return(
            
            <div className='country-container' key={key}>
                <h1>{name}</h1>
                <img src={flags.png} />
                <ul className='country-details'>
                    <li>Population: {population}</li>
                    <li>Capital: {capital}</li>
                    <li>Language: {formattedLanguage}</li>
                    <li>Timezone: {timezone}</li>
                </ul>
                <button onClick={this.handleClick}>Back</button>
            </div>
        )
    }
}

export default Country;