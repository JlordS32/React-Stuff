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
            postalCode,
            subRegion,
            coatOfArms,
            timezone,
        } = this.props.country;

        console.log(flags);

        return(
            
            <div className='container'>
                <h1>{name}</h1>
                <img src={flags.png} />
                <button onClick={this.handleClick}>Back</button>
            </div>
        )
    }
}

export default Country;