import './App.css';
import InputBar from './Component/InputBar/InputBar.js';
import ItemBar from './Component/ItemBar/ItemBar.js';
import TodoProvider from './Context/TodoContext.js';
import React,{useContext, useState} from 'react';

function App() {

  return (
    <TodoProvider>
    <div className='container'>
      <h1 className='heading'>Manage Your Todos</h1>
        <InputBar />
        <ItemBar />
    </div>
    </TodoProvider>
  );
}

export default App;
