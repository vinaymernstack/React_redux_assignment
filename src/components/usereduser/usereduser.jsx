import React,{useReducer} from 'react'

let countState = 0;
let reduser = (state,action)=>{
    switch(action.type){
        case "increment":{
            return state = action.value
        }
        default :{
            return state
        }
    }

}
const UseReduecer = (props) => {
    let [count,setcount] = useReducer(reduser,countState)
  return(
    <div>
        {count}
        <button className="btn btn-sm btn-primary" onClick={()=>setcount({type:"increment",value:5})}>increment</button>
    </div>
   )
  }


export default UseReduecer