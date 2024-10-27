import React from 'react';
import { LuListTodo } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <>
        <div className='header'>
            <LuListTodo />
            <h3>Made with <FaHeart /> by  Mahesh Bhatt</h3>
        </div>
    </>
  )
}

export default Header