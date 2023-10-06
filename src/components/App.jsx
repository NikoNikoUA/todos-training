import React, { Component } from 'react';
import TodoList from '../components/TodoList/'

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Wish 1', completed: true, },
      { id: 'id-2', text: 'Wish 2', completed: false, },
      {id: 'id-3', text: 'Wish 3', completed: false,},
      {id: 'id-4', text: 'Wish 4', completed: false,},
    ],
      }

    deleteTodo = todoId => {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId),
      }))
    }



  render() {
    const { todos } = this.state;
    const totalTodosCount = todos.length;
    const completedTodos = todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc ,0)
    return (
      <>
        <h1>Wish List</h1>
        
        <div>
          <p> Total wishes: { totalTodosCount}</p>
          <p>Total completed: { completedTodos }</p> 
</div>

        <TodoList todos={todos } onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}


export default App;