import React, { Component } from "react";
import Test from "./test";

class App extends Component {
  state = {
    inputValue: ""
  };

  changeInput = e => {
    const changeValue = e.target.value;
    this.setState({ inputValue: changeValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Test-1</h1>
        </header>
        <Test
          inputValue={this.state.inputValue}
          changeInput={this.changeInput}
        />
        이력서
        <br />
        연락처
        <br />
        포트폴리오
        <br />
      </div>
    );
  }
}

export default App;
