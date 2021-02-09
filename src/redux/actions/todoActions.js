
import {TodoConstants} from '../constants/todoConstants'

//  action for add todo
const addTodo = (data) => {
    return{
        type: TodoConstants.ADD_TODO, value:data
    }
}

//  action for delete todo
const deleteTodo = (data) => {
    return{
        type: TodoConstants.DELETE_TODO, value:data
    }
}


export  const todoActions = {
    addTodo,deleteTodo
}