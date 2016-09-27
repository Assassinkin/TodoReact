var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () =>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () =>{
    it('should set valid todos array', () => {
      var todos = [{
        id:23,
        text: 'tesdqdsqqsd',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set valid todos array', () => {
      var badTodos = {a:'dqs'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);

    });
  });
  describe('getTodos', () =>{
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todos if valid array in local storage ', () => {
      var todos = [{
        id:23,
        text: 'tesdqdsqqsd',
        completed: false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
  describe('filtertodos', () => {
    var todos = [{
      id: 1,
      text: 'sometext',
      completed: true
    },
    {
      id: 2,
      text: 'sometext2',
      completed: false
    },
    {
      id: 3,
      text: 'sometext3',
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

  });
});
