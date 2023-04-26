// Older way to to import without having to create unnecessary parent elements
/*
import React, { Fragment } from 'react';

const Skills = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </Fragment>
  )
}
*/

import React from 'react';

const Skills = () => {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </>
  )
}
const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}

export default RequiredSkills;