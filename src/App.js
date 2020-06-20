import React from 'react';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Divider from './shared/components/divider/Divider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import History from './components/history/History';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body className="BodyContent">
        <Menu />
        <Divider />
        <About />
        <Divider />
        <History />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
