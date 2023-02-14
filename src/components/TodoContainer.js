import TodoDisplay from "./TodoDisplay";
import React from "react";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoMap: {},
    };
  }

  componentDidMount() {
    const mapResults = this.props.todos.reduce(
        (results, todo) => {
          if (todo.status === "ACTIVE") {
            results.ACTIVE.push(todo);
          } else if (todo.status === "PENDING") {
            results.PENDING.push(todo);
          } else {
            results.DONE.push(todo);
          }
          return results;
        },
        { ACTIVE: [], PENDING: [], DONE: [] }
      );

      this.setState({
        todoMap: mapResults,
      });

    // const arrofStrings = ['a','b','c']
    // arrofStrings.reduce((results, currentString)=>{
    //     debugger
    //     console.log('result before modification inside of the loop')
    //     return results += currentString},"");
    // const a = {nae:'kyra', amount:10000000} //abc
    // const b = {amount: 10000000, nae:'kyra'} //def
    // console.log(a === b) //always false
  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.todos) !== JSON.stringify(prevProps.todos)) {
      const mapResults = this.props.todos.reduce(
        (results, todo) => {
          if (todo.status === "ACTIVE") {
            results.ACTIVE.push(todo);
          } else if (todo.status === "PENDING") {
            results.PENDING.push(todo);
          } else {
            results.DONE.push(todo);
          }
          return results;
        },
        { ACTIVE: [], PENDING: [], DONE: [] }
      );

      this.setState({
        todoMap: mapResults,
      });
    }
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.todoMap).map((status) => {
          return (
            <section key={status}>
              <h2>{status}</h2>
              {this.state.todoMap[status].map((todo, i) => {
                return (
                  <TodoDisplay
                    key={i}
                    title={todo.title}
                    description={todo.description}
                    status={todo.status}
                    id={todo.id}
                    handleEdit={this.props.handleEdit}
                    handleDelete={this.props.handleDelete}
                  />
                );
              })}
            </section>
          );
        })}
      </div>
    );
  }
}

export default TodoContainer;
