const storeTodo = require('./crud.js');

// Unit test for add todo
describe('addTodo()', () => {
  it('addTodo must add a todo in the existing list', () => {
    // Arrange
    const todos = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
    ];
    const newTodo = {
      index: 2,
      description: 'two',
      isCompeleted: true,
    };
    const expected = [
      {
        index: 1,
        description: 'one',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'two',
        isCompeleted: true,
      },
    ];
    // Act
    const output = storeTodo.saveTodo(newTodo, todos);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});