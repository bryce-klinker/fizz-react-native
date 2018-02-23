import {evaluate, getCurrent} from "./src/fizz-buzz";
import React, {Component} from "react";
import FizzBuzz from "./src/components/FizzBuzz";

export default class App extends Component {
  state = { value: '0' };

  async getValue() {
    const value = await getCurrent();
    console.log(value);
    this.setState({ value: evaluate(value.Value) });
  }

  render() {
    return <FizzBuzz getValue={() => this.getValue()} value={this.state.value}/>
  }
}