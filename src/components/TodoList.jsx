import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, setTodos}) => {
  return (
    <>
        <div className='list'>
            <TodoItem todos={todos} setTodos={setTodos}/>
        </div>
    </>
  )
}

export default TodoList