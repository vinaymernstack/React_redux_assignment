import { UserConstants } from "../constants/userConstants";

const initialState = {
    loding : "",
    users : [],
    error : "",
}

const UserReduser = (state = initialState,actions)=>{ 
    switch (actions.type){
        //  the api initailly loading
        case UserConstants.FETCH_USER_REQUEST :
            return{
                ...state,
                loading:"loading"
            }
        // if the apis getting data successfully
        case UserConstants.FETCH_USER_SUCCESS :
            return{
                ...state,
                loading:"",
                users:actions.value
            }
        // if the apis getting any error
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