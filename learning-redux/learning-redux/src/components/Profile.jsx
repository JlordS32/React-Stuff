import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
   const {
      name,
      age,
      email
   } = useSelector(
      state => state.user.value
   );;

   const themeColor = useSelector(state => state.theme.value);

   return (
      <div>
         <h1> Profile Page </h1>
         <p>Name: {name}</p>
         <p>Age: {age}</p>
         <p>Email: {email}</p>
         <p>Color: {themeColor}</p>
      </div>
   )
};

export default Profile