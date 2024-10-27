import React, { useEffect, useRef, useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";



const Form = ({todos, setTodos}) => {

    const [todo, setTodo] = useState('');

    const [error, setError] = useState(false);

    const inputRef = useRef(null); // Create a ref for the input

    useEffect(() => {
        // Focus the input when the component mounts
        inputRef.current.focus();
    }, []); // Empty dependency array ensures this runs only once

    function handleSubmit(e){
        e.preventDefault();
        if(todo){
            const newTodos = [...todos, todo]
            localStorage.setItem('todos', JSON.stringify(newTodos))
            setTodos(newTodos);
            setError(false);
        }else{
            setError(true);
        }
        setTodo('');
    }
  return (
    <>
        <form onSubmit={handleSubmit} style={{ borderColor: error ? 'red' : 'initial' }}>
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} ref={inputRef} placeholder='Add a Todo...'/>
            <button><IoMdAddCircleOutline/></button>
        </form>   
    </>
  )
}

export default Form