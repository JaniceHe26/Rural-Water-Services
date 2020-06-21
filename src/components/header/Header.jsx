import SecondaryButton from "../../shared/components/button/SecondaryButton";
import Logo from "../../shared/images/blue-circle.png";
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="CompanyLogoContainer">
        <div className="LogoImgContainer">
          <img src={Logo} alt="Rural Water Services logo" className="Logo" />
        </div>
        <div className="CompanyLogoTitle">Rural Water Services</div>
      </div>
      <div className="ButtonContainer">
        <a href="#services"><SecondaryButton text="Services" /></a>
        <a href="#about"><SecondaryButton text="About" /></a>
        <a href="#history"><SecondaryButton text="History" /></a>
      </div>
    </div >
  )
}

export default Header;