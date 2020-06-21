import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <React.Fragment>
      <div className="FooterContainer">
        <div className="Text">Rural Water Services</div>
        <div className="Text"><i class="fa fa-envelope" aria-hidden="true"></i>Email: ruralwater6@gmail.com</div>
        <div className="Text">Phone: (913)238-0876</div>
        <div className="Text">Location: Wellsville, Kansas</div>
      </div>
    </React.Fragment>
  );
}

export default Footer;