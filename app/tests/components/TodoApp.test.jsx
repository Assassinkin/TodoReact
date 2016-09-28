var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');
describe('TodoApp', () => {
  it('should exist',() => {
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'etxt dsqdqs ';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBe('number');
  });
  it('should toggle completed value when handletoggle is called ', () => {
    var todoData = {
      id: 414,
      text: 'some text hhh',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(414);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBe('number');
  });
  it('should toggle todo from completed to incompleted ', () => {
    var todoData = {
      id: 414,
      text: 'some text hhh',
      completed: true,
      createdAt: 0,
      completedAt: 124
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(414);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
