import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message";
import Inputbox from "./components/Inputbox";

import "./styles.css";

class App extends Component {
  state = {
    firstName: { content: "", error: false },
    lastName: { content: "", error: false },
    autre: { content: "", error: false }
  };

  validInput = e => {
    let InputTarget = e.target.name;
    console.log();
    const regexp = /[A-Za-z]{3,}/;
    const test = regexp.test(e.target.value);
    this.setState(prevState => ({
      [InputTarget]: { ...prevState[InputTarget], error: test }
    }));
  };

  changeInput = e => {
    let InputTarget = e.target.name;
    const content = e.target.value;
    this.setState(prevState => ({
      [InputTarget]: { ...prevState[InputTarget], content: content }
    }));
  };

  composeChange = e => {
    this.changeInput(e);
    this.validInput(e);
  };

  render() {
    const { firstName } = this.state;
    const { lastName } = this.state;
    return (
      <div className="App">
        <h1>Data Binding</h1>
        <Inputbox name="firstName" onChange={this.composeChange} />
        <Inputbox name="lastName" onChange={this.composeChange} />
        <Message
          firstName={firstName.content}
          lastName={lastName.content}
          firstNameError={firstName.error}
          lastNameError={lastName.error}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
