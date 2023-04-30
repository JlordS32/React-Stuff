import React, { Component } from 'react';
import challenges from './challenges';
import {
    BrowserRouter,
    Route,
    Routes,
    NavLink,
    useLocation,
} from "react-router-dom";


const Home = (props) => {
    return (
        <h1>Welcome Home! UwU</h1>
    )
};

const About = () => <h1>About Us</h1>;
const Contact = () => {
    return (
        <h1>Contact Us</h1>
    )
};

const Challenge = ({
    challenges: {
      name,
      description,
      status,
      days,
      level,
      slug,
      url,
      duration,
      author: { firstName, lastName },
    },
  }) => (
    <div>
      <h1>{name}</h1>
      <p>{level}</p>
      <p>
        Author: {firstName} {lastName}
      </p>
      {duration && (
        <>
          {' '}
          <small>{duration}</small> <br />
        </>
      )}
      <small>Number of days: {days}</small>
  
      <p>{description}</p>
    </div>
)

const Challenges = (props) => {
    const path = props.location.pathname + '/*';
    const slug = path.split('/').slice(path.split('/').length -1)[0];
    const challenge = challenges.filter(
        (challenge) => challenge.slug === slug
    );

    return (
        <>
            <h1>Challenges</h1>
            <ul>
                {challenge.map(({name, slug}) => (
                    <li>
                        <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
                    </li>
                ))}
            </ul>
            <Routes>
                <Route
                    path={'/challenges'}
                    element={() => <h1>Choose any of the challenges</h1>}
                />
                <Route 
                    path={path}
                    element={(props) => <Challenge challenge={challenge}/>}
                />
            </Routes>
        </>
    )
};

const NotFound = (props) => <h1>The page your looking for is not found!</h1>

const NavBar = () => (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/challenges'>Challenges</NavLink>
        </li>
    </ul>
)

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='app-container'>
                    <NavBar />

                    <Routes>
                        <Route 
                            path="/" 
                            element={<Home />} 
                        />
                        <Route 
                            path="/about" 
                            element={<About />} 
                        />
                        <Route 
                            path="/contact" 
                            element={<Contact location={location} />}
                        />
                        <Route 
                            path="/challenges/*" 
                            element={<Challenges location={location}/>} 
                        />
                        <Route 
                            path="*"
                            element={<NotFound />}
                        />     
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }   
}

export default App;