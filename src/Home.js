import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "./store/useStore";

class Home extends React.Component {
  addCount() {
    const { dispatch } = this.props;
    dispatch({
      type: "counter/increment",
      payload: 11
    });
  }

  addTodo() {
    const { dispatch } = this.props;
    dispatch({
      type: "todos/save",
      payload: 11
    });
  }

  render() {
    const {
      counter: { count },
      todos: { todo }
    } = this.props;
    return (
      <div>
        <span>count:{count}</span>
        <button
          onClick={() => {
            this.addCount();
          }}
        >
          addCount
        </button>
        <span>todo:{todo}</span>

        <button
          onClick={() => {
            this.addTodo();
          }}
        >
          addTodo
        </button>
      </div>
    );
  }
}
export default withRouter(
  connect(({ counter, todos }) => ({
    counter,
    todos
  }))(Home)
);
