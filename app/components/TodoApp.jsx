var React= require('react');
var uuid = require('node-uuid');
var moment = require('moment');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var Bottom = require('Bottom');



var TodoApp = React.createClass({
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
  render: function() {
    return(

      <div>
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
module.exports = TodoApp;
