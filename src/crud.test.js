const storeTodo = require('./crud.js');

// Unit test to test saveTodo method
describe('addTodo()', () => {
  it('addTodo must add a todo in the existing list', () => {
    // Arrange
    const todos = [
      {
        index: 1,
        description: 'First todo',
        isCompeleted: false,
      },
    ];
    const newTodo = {
      index: 2,
      description: 'Second todo',
      isCompeleted: true,
    };
    const expected = [
      {
        index: 1,
        description: 'First todo',
        isCompeleted: false,
      },
      {
        index: 2,
        description: 'Second todo',
        isCompeleted: true,
      },
    ];
    // Act
    const output = storeTodo.saveTodo(newTodo, todos);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});

// Unit test to test removeTodo method
describe('removeTodo()', () => {
  it('removeTodo must remove todo from existing list', () => {
    // Arrange
    const todos = [
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
    const tobeDeleted = {
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
    ];
    // Act
    const output = storeTodo.removeTodo(tobeDeleted.index, todos);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});

// Unit test for editing todo description function.
describe('updateDescription()', () => {
  it('updateDescription must update description', () => {
    // Arrange
    const todos = [
      {
        index: 1,
        description: 'to be updated',
        isCompeleted: true,
      },
      {
        index: 2,
        description: 'This description should not be updated',
        isCompeleted: false,
      },
    ];

    const expected = [
      {
        index: 1,
        description: 'Updated description',
        isCompeleted: true,
      },
      {
        index: 2,
        description: 'This description should not be updated',
        isCompeleted: false,
      },
    ];
    // Act
    const output = storeTodo.updateDescription(1, 'Updated description', todos);
    // Assert
    expect(output).toStrictEqual(expected);
  });
});
