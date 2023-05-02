import React from 'react';

export const Country = ({data}) => {

    const countries = Object.entries(data).map(([key, value]) => {
        return ({
            name: value.name.common,
            flags: value.flags,
            population: value.population,
            languages:  value.languages,
            key: key,
            capital: value.capital,
            subRegion: value.subRegion,
            coatOfArms : value.coatOfArms.png,
            timezone: value.timezones,
            currency: value.currencies,
        });
    });

    return countries.map((country) => {
        if (country.capital === undefined ) {
            country.capital = [''];
        }

        const formattedCapital =
            country.capital.length > 0 || country.capital ==! undefined ? (
            <>
                <span>Capital: </span>
                {country.capital.join(', ')}
            </>
            ) : (
            ''
        )

        const formattedLanguage = Object.entries(country.languages).map(([key, value]) => value).join(', ');

        const formattedCurrency = Object.entries(country.currency).map(([key, value]) => value.name).join(', ')

        console.log(formattedCurrency);

        return(
            <div key={country.key} style={{
                marginBlock: '60px',
                fontFamily: 'sans-serif'
            }}>
                <h3 className='country-name'
                    style={{
                        fontSize: '30px',
                    }}>{country.name.toUpperCase()}</h3>
                <div className='country-flag'>
                    <img 
                        src={country.flags.png} 
                        style={{
                            width: 'auto',
                            height: '120px',
                            aspectRatio: '16 / 9',
                            padding: '10px',
                            backgroundColor: 'black',
                        }}   
                        alt={country.name}  
                    />
                    <p>Description: {country.flags.alt}</p>
                </div>
                <div className='country-text'>
                    <p>{formattedCapital}</p>
                    <p>
                        Language: {formattedLanguage}
                    </p>
                    <p>
                        <span>Population: </span>
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span>Currency: {formattedCurrency}</span>
                    </p>
                </div>
            </div>
        )
    })
};
