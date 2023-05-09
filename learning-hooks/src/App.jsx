import React, { useState } from 'react';

const App = () => {

    const [count, setCount] = useState(0);
    const [image, setImage] = useState('https://icatcare.org/app/uploads/2018/08/FIP.png');

    const number = {
        add: 2,
        minus: 3
    }

    const minusOne = () => {
        setCount(count - number.minus)
    }
    const addOne = () => {
        setCount(count + number.add)
    }

    const changeAnimal = () => {
        const dogUrl = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';

        const catUrl = 'https://icatcare.org/app/uploads/2018/08/FIP.png';

        let result = image === catUrl ? dogUrl : catUrl;

        setImage(result);
    }

    return (
        <div className='app-container'>
            <div className='numbers'>
                <h1>{count}</h1>
                <button 
                    onClick={addOne}>
                    Add One
                </button>
                <button 
                    onClick={minusOne}>
                    Minus One
                </button>
            </div>
            <div className='animals'>
                <h1>Animals</h1>
                <div className='animal'>
                    <img 
                        src={image} 
                        alt='animal' 
                        style={{
                            width: '100%',
                            height: '300px',
                            aspectRatio: '4/3',
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <button onClick={changeAnimal}
                style={{
                    width: '100px',
                    height: '50px'
                }}>
                    Change
                </button>
            </div>
        </div>
    )
}

export default App;