import React from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "./actions";

class Counter extends React.Component {
  // state = { count: 0 };

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    // this.props.dispatch({ type: "INCREMENT" });
    this.props.dispatch(increment());
  };

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    // this.props.dispatch({ type: "DECREMENT" });
    this.props.dispatch(decrement());
  };

  reset = () => {
    // this.props.dispatch({ type: "RESET" });

    this.props.dispatch(reset());
  };
  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <button onClick={this.reset}>X</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(Counter);
