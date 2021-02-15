
import {TodoConstants} from '../constants/todoConstants'

const addTodo = (data) => {
    return{
        type: TodoConstants.ADD_TODO, value:data
    }
}

const deleteTodo = (data) => {
    return{
        type: TodoConstants.DELETE_TODO, value:data
    }
}


export  const todoActions = {
    addTodo,deleteTodo
}