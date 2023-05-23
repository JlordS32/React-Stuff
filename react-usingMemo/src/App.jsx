import React, { useState, useMemo, memo, useCallback } from 'react';
import './app.modules.css';

function Swatch({params}) {
   console.log(`Swatch rendered ${params.color}`);
   return (
      <div
         style={{
            margin: 2,
            width: 75,
            height: 75,
            backgroundColor: params.color
         }}>
      </div>
   )
}

const MemoedSwatch = memo(Swatch);

function App() {
   const [appRenderIndex, setAppRenderIndex] = useState(0);
   const [colorInput, setColorInput] = useState('');
   const [color, setColor] = useState('red');

   console.log(`App rendered ${appRenderIndex}`);

   const handleColorChange = (e) => {
      setColorInput(e.target.value);
   }

   const handleClick = () => {
      setColor(colorInput);
   }

   const params = useMemo(() => ({ color }), [color]);
   const onClick = useCallback(() => {}, []);

   return (
      <div className='app'>
         <div
            style={{
               display: 'flex',
            }}>
            <input 
               type='text' 
               placeholder='Color: '
               onChange={handleColorChange} 
               />
            <button onClick={handleClick}>Submit</button>
         </div>
         <div>
            <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
               Re-Render App
            </button>
         </div>
         <div>
            <MemoedSwatch params={params} onClick={onClick}/>
         </div>
      </div>
   )
}

export default App;