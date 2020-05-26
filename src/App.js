import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import History from './components/history/History';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <About />
      <History />
    </div>
  );
}

export default App;
