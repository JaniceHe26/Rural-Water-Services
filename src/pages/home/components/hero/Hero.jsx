import SecondaryButton from "../../shared/components/button/SecondaryButton";
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <React.Fragment>
      <div className="HeroContainer">
        <h3 className="Slogan">Providing 20 years of service for locals</h3>
        <h4 className="SloganDetail">since 1980 through rain and snow</h4>
        <div className="QuoteButton">
          <a href="ruralwater6@gmail.com" rel="noopener noreferrer" target="_blank"><SecondaryButton text="Get Quote" /></a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero; 