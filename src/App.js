import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <>
      <div className="head">
        <Header title="Todos List"/>
      </div>
     
    <div className='todo-app'>
      <TodoList />
      </div>

      <div className="foot">
<Footer/>
      </div>
   </>
  );
}

export default App;