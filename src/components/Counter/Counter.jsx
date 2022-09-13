import React from "react";
import { Div ,CounterSpan} from "/Counter.styled";
import { Controls } from "./Controls";

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <Div>
         <CounterSpan>{this.state.value}</CounterSpan>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </Div>
    );
  }
}
