import React from 'react';
import ReactDOM from 'react-dom';

const Box = () => {
  const boxes = [];
  
  for (let i = 0; i < 31; i++) {
    boxes.push(<div key={i} className='box'>{i}</div>);
  }

  return <div>{boxes}</div>;
};

const Boxes = () => {
  return (
    <div className='box-container'>
      <Box />
    </div>
  )
}

const Header = () => {
  return (
    <header className='header-container'>
      <h1>Hello World!</h1>
    </header>
  );
};

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Boxes />
      </div>
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
