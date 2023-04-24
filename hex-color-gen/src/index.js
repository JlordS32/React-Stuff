import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ data: { title, subtitle } }) => {
  return (
    <header className="header-container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};

function generateRandomHexColor() {
  const hexChars = '0123456789abcdef';
  let hexColor = '#';

  // Loop through 6 times to generate each character of the hex color
  for (let i = 0; i < 6; i++) {
    // Pick a random hex character and add it to the color
    hexColor += hexChars[Math.floor(Math.random() * hexChars.length)];
  }

  return hexColor;
}

const Number = () => {
  const boxes = [];
  const spanRefs = useRef([]);

  const handleClick = (index) => {
    const generatedColor = generateRandomHexColor();
    boxes[index].style.backgroundColor = generatedColor;
    spanRefs.current[index].textContent = generatedColor;
  };

  for (let i = 0; i <= 31; i++) {
    const generatedColor = generateRandomHexColor();
    boxes.push(
      <div
        key={i}
        className="numbered-box"
        style={{ backgroundColor: generatedColor }}
        onClick={() => handleClick(i)}
        ref={(el) => (boxes[i] = el)}
      >
        <span ref={(el) => (spanRefs.current[i] = el)}>
          {generatedColor}
        </span>
      </div>
    );
  }

  return <div className="boxes-row-container">{boxes}</div>;
};

const Boxes = () => {
  return (
    <div className="box-container">
      <Number />
    </div>
  );
};

const App = () => {
  const data = {
    title: '30 Days Of React',
    subtitle: 'Hex Color Generator',
  };

  return (
    <div className="app">
      <div className="container">
        <Header data={data} />
        <Boxes />
      </div>
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
