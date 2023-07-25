import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Profile() {

   const users = useSelector(
      state => state.user.value
   );

   const {
      name,
      age,
      email
   } = users;

   const themeColor = useSelector(state => state.theme.value);

   useEffect(() => {
      console.log(users, themeColor);
   }, [themeColor, users]);

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