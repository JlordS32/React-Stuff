import React, { Component } from 'react';

class App extends Component {
    constructor (props) {
        super(props);
    }

    state = {
        firstName: '',
        message: '',
        key: '',
        value: '',
    }

    handleClick = (e) => {
        this.setState({
            message: 'Welcome to the world of events!',
        })
    }

    handleMouseMove = (e) => {
        if (e.type === 'mousemove') {
            this.setState({
                message: 'The mouse has touched me!!!',
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            firstName: e.target.value,
        })
        console.log(e.target);
        console.log(e.target.value);
    }

    handleKeyPress = (e) => {
        this.setState({
            message: `${e.target.value} has been pressed and the keycode is` + e.charCode,
        })
    }

    handleBlur = (e) => {
        this.setState({ message: 'Input field has been blurred' })
    }

    handleCopy = (e) => {
        this.setState({
          message: 'Using 30 Days Of React for commercial purpose is not allowed',
        })
    }

    handleSubmit = (e) => {
        this.setState({
            value: e.target.value,
        })

        alert(this.state.value)
    }
    render () {
        return (
            <div className='app'>
                <h1>Welcome to the World of Events</h1>

                <button onClick={this.handleClick}>Click Me</button>
                <div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'coral'
                }}
                onMouseMove={this.handleMouseMove}
                ></div>
                <p onCopy={this.handleCopy}>
                    Check copy right permission by copying this text
                </p>

                <p>{this.state.message}</p>

                <label htmlFor=''> Test for onKeyPress Event: </label>
                <input type='text' onKeyPress={this.handleKeyPress}/>
                <br />

                <label htmlFor=''> Test for onBlur Event: </label>
                <input type='text' onBlur={this.handleBlur} />
                
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='firstName'>First Name: </label>
                    <input
                    onChange={this.handleChange}
                    name='firstName'
                    />
                </div>

                <div>
                    <input type='submit' value='Submit' />
                </div>
                </form>

            </div>
        )
    }
}

export default App;