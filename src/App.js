import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import footer from './components/Footer';
function App() {
  return (
    <div className='todo-app'>
      <TodoList />
       <footer/>
    </div>
   
  );
}

export default App;