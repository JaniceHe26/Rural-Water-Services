import React from 'react';
import About from '../../components/about/About';
import Divider from '../../shared/components/divider/Divider';
import Footer from '../../common/components/footer/Footer';
import Header from '../../common/components/header/Header';
import Hero from '../../components/hero/Hero';
import History from '../../components/history/History';
import Menu from '../../common/components/menu/Menu';
import './home.css';

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home;