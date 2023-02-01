import React, { Component } from "react";
import { Hello } from "./Hello";
import { MessageExtract } from "./Extract";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <MessageExtract />
      </div>
    );
  }
}
