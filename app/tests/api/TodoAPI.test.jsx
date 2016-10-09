var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () =>{
    expect(TodoAPI).toExist();
  });
  describe('filtertodos', () => {
    var todos = [{
      id: 1,
      text: 'some text',
      completed: true
    },
    {
      id: 2,
      text: 'some text2',
      completed: false
    },
    {
      id: 3,
      text: 'yo man text3',
      completed: true
    }];

    it('should return all item if  showompleted is checked', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return all some if  showompleted is not checked', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });
    it('should filter todos by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });
    it('should return all todos if searchtext is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
