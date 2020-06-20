import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import History from './components/history/History';
import Divider from './shared/components/divider/Divider';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body className="BodyContent">
        <About />
        <Divider />
        <History />
      </body>
    </div>
  );
}

export default App;
