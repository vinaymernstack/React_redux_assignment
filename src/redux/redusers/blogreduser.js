import {blogConstants} from '../constants/blogConstants'

let initialState = {
    blogs : ["hello all"],
    list : ['haii']
}

const BlogReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case blogConstants.ADD_blog :
           let newState = {
               ...state,
               blogs:[...state.blogs,actions.value]
           }
            return newState

        case blogConstants.DELETE_blog:
            state.blogs.splice(actions.value,1)
           let newArrey = {
               ...state,
               blogs:[...state.blogs]
           }
            return newArrey
            
        default:
            return state
    }
}

export default BlogReducer