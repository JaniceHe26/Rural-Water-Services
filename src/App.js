import React from 'react';
import { useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="App"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>

  );
}

export default App;
