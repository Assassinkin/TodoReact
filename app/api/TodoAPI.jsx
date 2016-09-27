var $ = require('jquery');
module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];
    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  },
  filterTodos: function (todos,showCompleted, searchText) {
    var filteredTodos = todos;
    //filter by show completed;
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //filter by search text

    //sort todos with non-completed firrst

    return filteredTodos;
  }
};
