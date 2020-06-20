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
        <SecondaryButton text="Services" />
        <SecondaryButton text="About" />
        <SecondaryButton text="History" />
      </div>
    </div>
  )
}

export default Header;