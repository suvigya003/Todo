import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import  { useEffect } from 'react';
function TodoList() {
  const initTodo = () => {
    let list = localStorage.getItem("todos");
    if (list) {
      return JSON.parse(localStorage.getItem("todos"));
    }
    else {
      return [];
    }
  }
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
     localStorage.setItem("todos",JSON.stringify(todos));
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
const [todos, setTodos] = useState(initTodo());
useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
  
}

export default TodoList;