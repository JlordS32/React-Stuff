import React, { useState } from 'react';

const App = () => {

    const [searchInput, setSearchInput] = useState('');

    const data = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Doe' },
    ];

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <div className='app'>
            <input 
                input='text'
                placeholder='Search...'
                value={searchInput}
                onChange={handleChange}
            />

            <div>
                {filteredData.map(item => {
                    return (
                        <h1 key={item.id}>{item.name}</h1>
                    )
                })}
            </div>
        </div>
    )
}

export default App;