import React, { useState } from 'react';
import './style.css';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3'];

  return (
    <div className='app'>
      <div className='item-container'>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const Item = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const toggleDialog = () => {
    if (isOpen) {
      closeDialog();
    } else {
      closeAllDialogs();
      openDialog();
    }
  };

  const closeAllDialogs = () => {
    const allDialogs = document.querySelectorAll('.dialog');
    allDialogs.forEach(dialog => {
      dialog.close();
    });
  };

  return (
    <>
      <div className='item'>
        <button
          onClick={toggleDialog}
          style={{
            background: '#7526ff',
            padding: '10px',
            fontSize: '20px',
            borderRadius: '10px',
            border: '0',
          }}
        >
          Open Dialog
        </button>
        {isOpen && (
          <dialog open className='dialog'>
            <p>{item}</p>
            <button onClick={closeDialog}>Close Dialog</button>
          </dialog>
        )}
      </div>
    </>
  );
};

export default App;
