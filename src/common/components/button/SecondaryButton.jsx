import Button from "react-bootstrap/Button";
import React from 'react';
import './SecondaryButton.css';

class SecondaryButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button varient="outline-secondary" id="secondaryButton" className="Button">{this.props.text}</Button>
      </React.Fragment>
    );
  }
}

export default SecondaryButton;