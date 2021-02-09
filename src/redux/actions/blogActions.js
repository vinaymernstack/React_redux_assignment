
import {blogConstants} from '../constants/blogConstants'

const addblog = (data) => {
    return{
        type: blogConstants.ADD_blog, value:data
    }
}

const deleteblog = (data) => {
    return{
        type: blogConstants.DELETE_blog, value:data
    }
}

export  const blogActions = {
    addblog,deleteblog
}