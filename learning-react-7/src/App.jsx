import React from 'react';
import Header from './components/header/Header';
import Skills from './components/Skills';

const App = () => {
    const data = {
        welcome: '30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
        date: 'Oct 9, 2020',
    }  
    return (
        <div className='app'>
            <Header data={data} />
            <main>
                <Skills />
            </main>
        </div>
    )
}

export default App;
