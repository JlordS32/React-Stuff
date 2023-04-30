import React from 'react';
import challenges from './challenges';
import { NavLink } from "react-router-dom";
import { Welcome } from './Welcome';

const Challenge = ({
    challenges: {
        name, description, status, days, level, slug, url, duration, author: { firstName, lastName },
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
);
export const Challenges = (props) => {
    /*
    const location = useLocation();
    const path = location.pathname + '/*';
    const slug = path.split('/').slice(path.split('/').length -1)[0];
    */
    const challenge = challenges.filter(
        (challenge) => challenge.slug
    );

    return (
        <>
            <Welcome isLoggedIn={true} handleLogout={props.logout}/>
            <h2>Challenges</h2>
            <p>Choose any of the challenges</p>
            <ul>
                {challenge && challenge.length > 0 ? challenge.map(({ name, slug }) => (
                    <li key={slug}>
                        <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
                    </li>
                )) : (
                    <li>No matching challenge found</li>
                )}
            </ul>
        </>
    );
};
