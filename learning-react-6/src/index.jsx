import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    )
  }
}

class LogIn extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const validate = this.props.validate;
    return (
      <div className='login-container'>
        <h1>Sign in</h1>
        <div className='signin-textbox'>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <button onClick={validate}>Sign in</button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  }
  validate = () => {
    const status = this.state.loggedIn;

    const isLoggedIn = status ? false: true;
    this.setState({ loggedIn: isLoggedIn })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
      validate: this.validate,
    }

    const status = this.state.loggedIn ? <Header data={data} /> : <LogIn validate={data.validate}/>;

    return (
      <div className='app'>
        {status}
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);