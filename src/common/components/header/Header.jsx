import SecondaryButton from "../../../shared/components/button/SecondaryButton";
import Logo from "../../../shared/images/blue-circle.png";
import DropdownMenu from "../../../shared/components/dropdownmenu/DropdownMenu";
import React from 'react';
import './Header.css';

const sections = [
  {
    id: 0,
    text: "Services",
    link: "#services",
  },
  {
    id: 1,
    text: "About",
    link: "#about",
  },
  {
    id: 2,
    text: "History",
    link: "#history",
  },
];

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="CompanyLogoContainer">
        <div className="LogoImgContainer">
          <img src={Logo} alt="Rural Water Services logo" className="Logo" />
        </div>
        <div className="CompanyLogoTitle">Rural Water Services</div>
      </div>
      <div className="ItemList">
        {sections.map((section) => (
          <>
            <a href={`#${section.link}`}><SecondaryButton text={section.text} /></a>
          </>
        ))}
      </div>
      <div className="DropdownMenu">
        <DropdownMenu list={sections} />
      </div>
    </div >
  )
}

export default Header;