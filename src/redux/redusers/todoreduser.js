import {TodoConstants} from '../constants/todoConstants'

let initialState = {
    todos : ["hello all"],
    list : ['haii']
}

const TodoReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case TodoConstants.ADD_TODO :
           let newState = {
               ...state,
               todos:[...state.todos,actions.value]
           }
            return newState

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