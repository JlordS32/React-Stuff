import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isTouched: false,
        };
      }
    
      handleMouseMove = (e) => {
        if (!this.state.isTouched) {
          this.setState({ isTouched: true });
    
          const container = e.target.parentElement;
          const x = Math.floor(Math.random() * (window.innerWidth - container.clientWidth));
          const y = Math.floor(Math.random() * (window.innerHeight - container.clientHeight));
    
          e.target.style.backgroundColor = this.getRandomHexColor();
          e.target.innerHTML = this.getRandomLoremIpsum();
    
          container.style.left = `${x}px`;
          container.style.top = `${y}px`;
    
          // Reset the isTouched state after the animation is complete
          this.setState({ isTouched: false });
        }
      };

    getRandomLoremIpsum = (paragraphs = 1, minWordsPerParagraph = 1, maxWordsPerParagraph = 1) => {
        const words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'.split(' ');

        function getRandomSentence(minWords, maxWords) {
        const sentenceLength = Math.floor(Math.random() * (maxWords - minWords + 1) + minWords);
        const sentenceWords = [];

        for (let i = 0; i < sentenceLength; i++) {
            const randomWordIndex = Math.floor(Math.random() * words.length);
            sentenceWords.push(words[randomWordIndex]);
        }

        return sentenceWords.join(' ') + '.';
        }

        const loremIpsum = [];

        for (let p = 0; p < paragraphs; p++) {
        const sentences = [];
        const numberOfSentences = Math.floor(Math.random() * (maxWordsPerParagraph - minWordsPerParagraph + 1) + minWordsPerParagraph);

        for (let s = 0; s < numberOfSentences; s++) {
            sentences.push(getRandomSentence(2, 4));
        }

        loremIpsum.push(sentences.join(' '));
        }

        return loremIpsum.join('\n\n');
    }

    renderBoxes = () => {
        const numBoxes = 3;
        const boxes = [];

        for (let i = 0; i < numBoxes; i++) {
        boxes.push(
            <div key={i} style={this.containerStyles} className='container'>
            <div style={this.divStyles} onMouseMove={this.handleMouseMove} className='box'>
                Hello World!
            </div>
            </div>
        );
        }

        return boxes;
    };

    getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
    
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
    
        return color;
    }


    containerStyles = {
        position: 'absolute',
        left: 0,
        top: 0,
    };

    divStyles = {
        display: 'inline-block',
        padding: '20px 40px',
        backgroundColor: '#4dd0e1',
        cursor: 'pointer',
        borderRadius: '10px',
        fontFamily: 'sans-serif',
        fontSize: '30px',
        color: 'white',
    };

    render() {
        return <div className='app'>{this.renderBoxes()}</div>;
    }
}

export default App;
