import React, { useEffect, useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';
import Header from './Header';

const Todo = () => {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
       const storedData = localStorage.getItem('todos');
       if(storedData){
           setTodos(JSON.parse(storedData))
       }
    },[])

  return (
    <>  
        <Header />
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default Todo