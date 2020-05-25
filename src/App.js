import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <About />
    </div>
  );
}

export default App;
