import React from "react";
import data from "../../../data.json";
import './Services.css';


class Services extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Services-Container">
          {data.map(service => {
            if (service.service !== this.props.service) {
              return (<> </>)
            }
            return (
              <div key={service.service}>
                <div className="ImageContainer">
                  <img className="ServiceImage" src={service.img} alt={service.name} />
                </div>
                <h3 className="ServicesName">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Services; 