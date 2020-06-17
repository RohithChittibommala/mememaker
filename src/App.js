import React, { Component } from "react";
import "./App.css";
import Main from "./components/MemeGenerator";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
