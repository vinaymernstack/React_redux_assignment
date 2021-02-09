
import React from 'react'
import InputTodo from '../../components/InputTodo/InputTodo'
import TodosList from '../../components/todosList/todosList'
import UsersBlock from '../../components/usersBlock/usersBlock'

const Homepage = (props) => {
  return(
    <div className="container">
        <h1 className="text-center my-4">TODO</h1>
        <InputTodo/> {/* adding todo */}
        <TodosList/>{/*showing todo list */}
        <UsersBlock/>{/* showing users list through api */}
    </div>
   )
  }



export default Homepage