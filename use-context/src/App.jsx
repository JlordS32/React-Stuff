import React, { 
   useState, 
   useContext,
   createContext,
   useEffect } 
from 'react';

const List = ({value}) => {
   return (
      <li>{value}</li>
   );
};

const TestContext = createContext(null);

const App = () => {
   const [input, setInput ] = useState(localStorage.getItem('input') || '');
   const [lists, setLists] = useState(JSON.parse(localStorage.getItem('lists')) || []);

   useEffect(() => {
      localStorage.setItem('input', input);
   }, [input]);

   useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(lists));
   }, [lists]);

   const handleClick = () => {
      if (input === '') {
         alert('Enter some bloody inputs mate!')
         return;
      };
      setLists([...lists, input]);
      setInput('');
   };

   return (
      <div className='app-container'>
         <input type="text" onChange={e => setInput(e.target.value)} />

         <button onClick={handleClick}>
            Add
         </button>
         
         <ul>
            {lists.map((value, index) => (
               <List value={value} key={index}/>
            ))}
         </ul>
      </div>
   );
};

export default App;