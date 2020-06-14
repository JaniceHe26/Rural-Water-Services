import Button from "react-bootstrap/Button";
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
        <Button variant="outline-primary" className="Button">Services</Button>
        <Button variant="outline-primary" className="Button">About</Button>
        <Button variant="outline-primary" className="Button">History</Button>
      </div>
    </div>
  )
}

export default Header;