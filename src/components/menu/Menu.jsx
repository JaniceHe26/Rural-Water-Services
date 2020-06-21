import React from "react";
import Section from "../../shared/components/section/Section";
import Services from "./Services";
import "./Menu.css";

class Menu extends React.Component {
  constructor(){
    super();

    this.state = {
      water: true,
      ground: false,
      other: false
    };

    this.services = {
      water: [["Residental Turnovers","Commerial Buildings","Services and Repairs", "Routinue Preventation and Check Ups"], ["Emergency Services","Water Leak","New Installation"]],
      ground: [["he", "he", "he"], ["pitts", "pitts"]],
      other: [["a","b","c"],["d"],["e","f"]],
    };
  }

  handleWater = () => {
    this.setState({
      water: true,
      ground: false,
      other: false
    })
  }

  handleGround = () => {
    this.setState({
      water: false,
      ground: true,
      other: false
    })
  }

  handleOther = () => {
    this.setState({
      water: false,
      ground: false,
      other: true
    })
  }

  render() {
    const body = (
      <React.Fragment>
        <div className="ServicesTitle">
          <h4 className={this.state.water ? "active-menu" : "ServiceName"} onClick={this.handleWater}>Water</h4>
          <h4 className={this.state.ground ? "active-menu" : "ServiceName"} onClick={this.handleGround}>Ground</h4>
          <h4 className={this.state.other ? "active-menu" : "ServiceName"} onClick={this.handleOther}>Others</h4>
        </div>

        {this.state.water && (
            <Services name="Water Services" lists={this.services.water} />
          )
        } 

        {this.state.ground && (
            <Services name="Ground Services" lists={this.services.ground} />
          )
        }

        {this.state.other && (
            <Services name="Other Services" lists={this.services.other} />
          )
        }
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Section title="Services" body={body} />
      </React.Fragment>
    );
  }
}

export default Menu;
