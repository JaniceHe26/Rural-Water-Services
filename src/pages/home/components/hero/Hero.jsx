import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import SecondaryButton from "../../../../common/components/button/SecondaryButton";

import "./Hero.css";

function Hero() {
  return (
    <React.Fragment>
      <Jumbotron className="HeroContainer">
        <h3 className="Slogan">Providing 20 years of service for locals</h3>
        <h4 className="SubSlogan">since 1980 through rain and snow</h4>
        <div className="QuoteButton">
          <a href="ruralwater6@gmail.com" rel="noopener noreferrer" target="_blank">
            <SecondaryButton text="Get Quote" />
          </a>
        </div>
      </Jumbotron>
    </React.Fragment>
  )
}

export default Hero;