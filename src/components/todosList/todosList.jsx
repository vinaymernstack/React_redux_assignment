import React from 'react'
import { connect } from "react-redux";
import {todoActions} from '../../redux/actions/todoActions'
const TodosList = (props) => {

    console.log(props.todoslist)
  return(
    <div>
        <table>
            
        {props.todoslist.map((data,i)=>{
            return <tr key={i} >
               <td className="p-3"> {data} </td> <td> <button className="btn btn-danger btn-sm" onClick={()=> props.deleteTodo(i)}>Delete</button></td> </tr>
        })}
        </table>
    </div>
   )
  }

  let mapStateToProps = state =>{
      return{
          todoslist : state.Todo.todos
      }
  }

  let mapDispatchToProps = dispatch =>{
    return {
        deleteTodo : (index)=>dispatch(todoActions.deleteTodo(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodosList)