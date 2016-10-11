import React from 'react';
import * as Redux from 'react-redux';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var Bottom = require('Bottom');
import * as actions from 'actions';



export var TodoApp = React.createClass({
  // handleToggle: function(id) {
  //   var updatedTodos = this.state.todos.map((todo) => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix(): undefined;
  //     }
  //     return todo;
  //   });
  //   this.setState({todos: updatedTodos})
  // },
  onLogout(e) {
    var {dispatch} =this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render () {
    return(

      <div>
        <div className="page-action"><a href="#" onClick={this.onLogout}>Logout</a></div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 meduim-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList/>
              <AddTodo />
            </div>
          </div>
        </div>
        <Bottom/>


      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
