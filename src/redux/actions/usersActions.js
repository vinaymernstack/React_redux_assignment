import { UserConstants } from "../constants/userConstants";
import Axios from 'axios'

// Action for calling api
const fetch_user_request_action = ()=>{
    return {
        type:UserConstants.FETCH_USER_REQUEST
    }
}

// Action for after succfully getting data
const fetch_user_success_action = (payload)=>{
    return {
        type:UserConstants.FETCH_USER_SUCCESS,value:payload
    }
}

// Action for while error getting in data
const fetch_user_failure_action = (payload)=>{
    return {
        type:UserConstants.FETCH_USER_FAILURE,value:payload
    }
}

// fetch user data api function
const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetch_user_request_action()) 
        Axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
        console.log(res.data)
        dispatch(fetch_user_success_action(res.data))
        })
        .catch(err =>{
        dispatch(fetch_user_failure_action(err.message))
        })
    }
}

let usersActions = {
    fetchUsers
}
export default usersActions