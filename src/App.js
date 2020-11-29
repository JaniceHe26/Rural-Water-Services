import React from 'react';
import { useEffect } from "react";
import { motion } from "framer-motion";
import Home from './pages/home/home';
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
      <Home />
    </motion.div>

  );
}

export default App;
