var React= require('react');
var TodoList = require('TodoList');


var TodoApp = React.createClass({
  getInitialState: function() {
    return{
      todos:[
        {
          id: 1,
          text: 'walk the dog'
        }, {
          id: 2,
          text: 'Play some league'
        },
        {
          id: 3,
          text: 'get some food'
        },
        {
          id:4,
          text: 'talk to the house owner'
        }
      ]
    };
  },

  render: function() {
    var {todos} =this.state;
    return(

      <div>
        <TodoList todos={todos}/>

      </div>
    )
  }
});
module.exports = TodoApp;
