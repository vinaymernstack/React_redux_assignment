import {TodoConstants} from '../constants/todoConstants'

let initialState = {
    todos : ["hello all"],
    list : []
}

const TodoReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        // adding todo
        case TodoConstants.ADD_TODO :
            return {
                ...state,
                todos:[...state.todos,actions.value]
            }
        // delete selected todo 
        case TodoConstants.DELETE_TODO:
            state.todos.splice(actions.value,1)
           let newArrey = {
               ...state,
               todos:[...state.todos]
           }
            return newArrey
            
        default:
            return state
    }
}

export default TodoReducer