// Shared Section Component.
import React from 'react';
import './Section.css';

class Section extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="SectionContainer">
          <div className="Title">{this.props.title}</div>
          <div className="Body">{this.props.body}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Section;