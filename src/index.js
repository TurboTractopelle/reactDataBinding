import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message";
import Inputbox from "./components/Inputbox";

import "./styles.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  changeInput = e => {
    let InputTarget = e.target.name;
    console.log(InputTarget, this.state);
    this.setState({ [InputTarget]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Data Binding</h1>
        <Inputbox name="firstName" onChange={this.changeInput} />
        <Inputbox name="lastName" onChange={this.changeInput} />
        <Message
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
