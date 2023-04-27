import React, { Component } from "react";

class App extends Component {
    firstName = React.createRef();
    lastName = React.createRef();
    country = React.createRef();
    title = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.firstName.current.value);
        console.log(this.lastName.current.value);
        console.log(this.country.current.value);
        console.log(this.title.current.value);

        const data = {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            country: this.country.current.value,
            title: this.title.current.value
        }

        Object.entries(data).map(([key, value]) => {
            console.log(`Key: ${key}\nValue: ${value}`);
        })
    }

    render() {
        return(
            <div className='app'>
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name: </label>
                        <input 
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder='First Name'
                            ref={this.firstName}
                        />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name: </label>
                        <input 
                            type='text'
                            id='lastName'
                            name='lastName'
                            placeholder='Last Name'
                            ref={this.lastName}
                        />
                    </div>
                    <div>
                        <label htmlFor='country'>Country: </label>
                        <input 
                            type='text'
                            id='country'
                            name='country'
                            placeholder='Country'
                            ref={this.country}
                        />
                    </div>
                    <div>
                        <label htmlFor='title'>Title: </label>
                        <input 
                            type='text'
                            id='title'
                            name='title'
                            placeholder='Title'
                            ref={this.title}
                        />
                    </div>

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default App;