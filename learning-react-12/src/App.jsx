import React, { Component } from 'react';

const Button = ({ onClick, text, style }) => {
    return (
        <button onClick={onClick} style={style}>
            {text}
        </button>
    )
}

const buttonWithStyle = (CompParam) => {
    const buttonStyles = {
      backgroundColor: '#61dbfb',
      padding: '10px 25px',
      border: 'none',
      borderRadius: 5,
      margin: 3,
      cursor: 'pointer',
      fontSize: 18,
      color: 'white',
    }
    return (props) => {
      return <CompParam {...props} style={buttonStyles} />
    }
  }

class App extends Component {
    render() {
        return(
            <div className='app-container'>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default App;