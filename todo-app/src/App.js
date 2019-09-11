
import React, {useState, useReducer} from 'react';
// import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
// import Todo from './components/TodoComponents/Todo.js'
import TodoList from './components/TodoComponents/TodoList.js'


function App () {
 
    return (
      <div>
        {/* <TodoForm addTodo={this.addTodo} filterTodos={this.filterCompleted}/> */}
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
        
        
        {/* <TodoList todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}/> */}
      </div>
    );
  }


export default App;
