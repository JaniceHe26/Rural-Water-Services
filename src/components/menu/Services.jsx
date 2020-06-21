import React from "react";
import data from "../../data.json";
import './Services.css';


class Services extends React.Component {
  state = {
    services: data
  };

  render() {
    const { services } = this.state; 
    return (
      <React.Fragment>
        <div className="Services-Container">
          {services.map(service => {
            if (service.service !== this.props.service) {
              return (<> </>)
            }
            return (
              <div key={service.service}>
                <img className="ServiceImage"src={service.img} alt={service.name} />
                <h3>{service.name}</h3>
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