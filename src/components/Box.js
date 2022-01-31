import React from "react";

class Box extends React.Component {
  render() {
    let rangeInput;
    if (this.props.icon !== "local_drink") {
      rangeInput = (
        <input
          type="range"
          steps="1"
          value={this.props.val}
          min={this.props.min}
          max={this.props.max}
          onInput={this.props.onInput}
          name={this.props.name}
        ></input>
      );
    } else {
      rangeInput = null;
    }
    return (
      <div className="box col-sm-3 col-6">
        <span
          className="material-icons"
          style={{ color: this.props.color, fontSize: 100 }}
        >
          {this.props.icon}
        </span>
        <p>
          {this.props.value} {this.props.unit}
        </p>
        {rangeInput}
      </div>
    );
  }
}

export default Box;
