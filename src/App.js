import React from "react";
// Components
import Box from "./components/Box";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTempChange = this.onTempChange.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
  }
  onHeartChange(e) {
    this.setState({ heart: e.target.value });
    this.calculateWater(e);
  }
  onStepsChange(e) {
    this.setState({ steps: e.target.value });
    this.calculateWater(e);
  }
  onTempChange(e) {
    this.setState({ temperature: e.target.value });
    this.calculateWater(e);
  }

  calculateWater(e) {
    switch (e.target.name) {
      case "steps":
        this.setState((prevState) => {
          let tempIncrement = 0.02 * Math.max(prevState.temperature - tempMin, 0);
          return {}
        });
      case "heart":
      case "temperature":
        if (this.state.temperature > 20) {
          this.setState((prevState) => { 
            let diff = prevState.temperature - this.state.temperature;
            console.log(diff);
            // if (diff > 0) {
            //   return {water: prevState.water + 0.02*diff};
            // } else {
            //   return {water: prevState.water - 0.02*diff};
            // }  
            return {water: prevState.water + 0.02*diff};
          });
        }
        break;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            val={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onInput={this.onStepsChange}
            name = "steps"
          />
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            val={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onInput={this.onHeartChange}
            name = "heart"
          />
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            val={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onInput={this.onTempChange}
            name = "temperature"
          />
        </div>
      </div>
    );
  }
}

export default App;
