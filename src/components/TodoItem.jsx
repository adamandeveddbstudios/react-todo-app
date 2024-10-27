import React, { useEffect } from 'react';
import { MdDeleteOutline } from "react-icons/md";


const TodoItem = ({todos, setTodos}) => {
    function handleDelete(item){
        const updatedTodos = todos.filter((todo)=> item !== todo)
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  return (
    <>
        {todos.map(item=>(
            <div className='item' key={item}>
                {item}
                <button onClick={()=>handleDelete(item)}><MdDeleteOutline /></button>
            </div>
        ))}
    </>
  )
}

export default TodoItem