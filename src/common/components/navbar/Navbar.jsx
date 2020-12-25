import SecondaryButton from "../button/SecondaryButton";
import Logo from "../../../common/images/blue-circle.png";
import DropdownMenu from "../dropdownmenu/DropdownMenu";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import './Navbar.css';

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

function NavigationBar() {
  return (
    <Navbar bg="light" expand="sm" sticky="top">
      <Navbar.Brand>
        <img
          src={Logo}
          className="Logo"
          alt="Rural Water Services company logo"
        />
        Rural Water Services
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          {sections.map((section) => (
            <Nav.Link href={`${section.link}`}>{section.text}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;