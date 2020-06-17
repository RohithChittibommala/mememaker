import React, { Component } from "react";
import "./../inputs.css";
class Input extends Component {
  getStyles = () => {
    const { styles } = this.props;
    console.log(styles);
    return styles;
  };
  dragover = (e) => {
    e.stopPropagation();
  };
  dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  render() {
    return (
      <h2
        className="inputH2"
        draggable={true}
        style={this.getStyles()}
        id={this.props.id}
        onDragStart={this.dragStart}
        onDragOver={this.dragover}
      >
        <textarea
          draggable={false}
          placeholder="type here"
          style={this.getStyles()}
          name=""
          id=""
          cols="30"
          rows="30"
        ></textarea>
      </h2>
    );
  }
}

export default Input;
