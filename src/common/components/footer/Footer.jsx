import React from 'react';
import FontAwesome from '../../../common/components/fontawesome/FontAwesome';
import './Footer.css';

function Footer() {
  return (
    <React.Fragment>
      <div className="FooterContainer">
        <div className="Text">Rural Water Services</div>
        <div className="Text"><FontAwesome name="envelope" /> ruralwater6@gmail.com</div>
        <div className="Text"><FontAwesome name="phone" flip="horizontal" /> (913)238-0876</div>
        <div className="Text"><FontAwesome name="map-marker" /> Wellsville, Kansas</div>
      </div>
    </React.Fragment>
  );
}

export default Footer;