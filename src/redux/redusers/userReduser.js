import { UserConstants } from "../constants/userConstants";

const initialState = {
    loding : "",
    users : [],
    error : "",
}

const UserReduser = (state = initialState,actions)=>{ 
    switch (actions.type){
        case UserConstants.FETCH_USER_REQUEST :
            return{
                ...state,
                loading:"loading"
            }
        case UserConstants.FETCH_USER_SUCCESS :
            return{
                ...state,
                loading:"",
                users:actions.value
            }
        case UserConstants.FETCH_USER_FAILURE :
            return{
                ...state,
                loading:"",
                error:actions.error 
            }
        default :
        return state
    }
}

export default UserReduser