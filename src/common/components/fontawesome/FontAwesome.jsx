import React from 'react';

/**
 * A wrapper for the Font Awesome icons.
 * Props = {
 *   name - Name of icon.
 *   size? - Optional: size of icon.
 * }
 */
class FontAwesome extends React.Component {
  render() {
    const { name, size, flip } = this.props;
    let classValue = `fa fa-${name}`;
    if (size) {
      classValue += ` fa-${size}`;
    }
    if (flip) {
      classValue += ` fa-flip-${flip}`;
    }
    return (
      <React.Fragment>
        <i className={classValue} aria-hidden="true"></i>
      </React.Fragment>
    );
  }
}

export default FontAwesome;