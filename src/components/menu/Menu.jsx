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
      water: [["janice","janice","janice"], ["dom","dom","dom"]],
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
        <div c-0plassName="ServicesTitle">
          <h4 onClick={this.handleWater}>Water</h4>
          <h4 onClick={this.handleGround}>Ground</h4>
          <h4 onClick={this.handleOther}>Others</h4>
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
