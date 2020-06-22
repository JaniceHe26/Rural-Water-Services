import React from 'react';
import { useEffect } from "react";
import About from './components/about/About';
import Divider from './shared/components/divider/Divider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import History from './components/history/History';
import Menu from './components/menu/Menu';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <body className="BodyContent">
        <Hero />
        <Divider />
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
