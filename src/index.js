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
    let obj = this.state[InputTarget];
    const regexp = /[A-Za-z]{3,}/;
    this.setState({
      [InputTarget]: { ...obj, error: regexp.test(e.target.value) }
    });
    console.log(obj);
  };

  changeInput = e => {
    let InputTarget = e.target.name;
    let obj = this.state[InputTarget];
    this.setState({ [InputTarget]: { ...obj, content: e.target.value } });
    //console.log(this.state.firstName);
  };

  composeChange = e => {
    //this.changeInput(e);
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
