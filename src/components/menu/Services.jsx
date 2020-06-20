import React from "react";
import './Services.css';

class Services extends React.Component {
  render() {
    return (
  <React.Fragment>
    <div className="ServicesContainer">
      <h3 className="ServicesName">{this.props.name}</h3>
      {/* <div className="ServicesList">{this.props.list}</div> */}
      <div className="ServiceListContainer">
        {this.props.lists.map(list => (
          <div className="ServicesList">
            <ul>
              {list.map(element => (
                <li>{element}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </React.Fragment>
    );
  }
};

export default Services; 