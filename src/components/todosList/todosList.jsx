import React from 'react'
import { connect, useDispatch, useSelector } from "react-redux";
import {todoActions} from '../../redux/actions/todoActions'

const TodosList = (props) => {
  let dispatch =   useDispatch()
  return(
    <div>
        <table>
            
        {useSelector(state=>state.Todo.todos).map((data,i)=>{
            return <tr key={i} >
               <td className="p-3"> {data} </td> <td> <button className="btn btn-danger btn-sm" onClick={()=> dispatch(todoActions.deleteTodo(i))}>Delete</button></td> </tr>
        })}
        </table>
    </div>
   )
  }


export default TodosList