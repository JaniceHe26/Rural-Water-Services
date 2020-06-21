import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <React.Fragment>
      <div className="FooterContainer">
        <div className="Text">Rural Water Services</div>
        <div className="Text">Email: ruralwater6@gmail.com</div>
        <div className="Text"><i class="fa fa-phone-square" aria-hidden="true">Phone: (913)238-087</i></div>
        <div className="Text">Location: Wellsville, Kansas</div>
      </div>
    </React.Fragment>
  );
}

export default Footer;