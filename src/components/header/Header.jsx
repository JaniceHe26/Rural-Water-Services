import React from 'react';
import './Header.css';

const logoLocation = "../../shared/images/blue-circle.png";

function Header() {
  return (
    <div class="Header-container">
      <div class="Logo-container">
        <img src={logoLocation} alt="Rural Water Services logo" class="Logo" />
      </div>
      <div class="Button-container">
        <button>Services</button>
        <button>About</button>
        <button>History</button>
      </div>
    </div>
  )
}

export default Header;