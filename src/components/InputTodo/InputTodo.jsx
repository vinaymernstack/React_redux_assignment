import React, { useState } from 'react'
import { connect } from "react-redux";
import {todoActions} from '../../redux/actions/todoActions'
const InputTodo = (props) => {
    const [todo,setTodo] = useState("")
    const addtodo = ()=>{
        if(todo){
          props.addTodo(todo)
          setTodo("")
        }
    }
  return(
   <div>
       <input type="text" className="form-input" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
       <button className="btn btn-sm btn-primary mx-4" onClick={addtodo}>Add todo</button>
   </div>
   )
  }


let mapDispatchToProps = dispatch =>{
    return {
        addTodo : (data)=>dispatch(todoActions.addTodo(data))
    }
}

export default connect(null,mapDispatchToProps)(InputTodo)