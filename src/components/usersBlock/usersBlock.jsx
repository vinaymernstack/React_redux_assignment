import React from 'react'
import { connect, useDispatch, useSelector } from "react-redux";
import UsersActions from '../../redux/actions/usersActions'


const UsersBlock = (props) => {
       //    sending action for getting data through useDispatch method
    const dispatchAction = useDispatch()
  return(
    <div>
        <div  className="mt-5">
        <button className="btn btn-primary btn-sm" onClick={()=>dispatchAction(UsersActions.fetchUsers())}>Get users</button>
        <span>  {useSelector(state=>state.Users.loading)} </span>
        </div>
        <table class="table table-dark mt-3">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>User name</td>
                    <td>Email</td>
                    <td>City</td>
                </tr>
            </thead>
            <tbody>
                {/* showing users data */}
            {
                  // getting user data by useSelector method
                useSelector(state=>state.Users.users).map(data=>{
                    return <tr>
                        <td>{data.id}</td><td>{data.name}</td>
                        <td>{data.username}</td><td>{data.email}</td><td>{data.address.city}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
       
       
    </div>
   )
  }

let mapStateToProps = state =>{
    // getting user data from store
    return{
        usersData : state.Users.users,
        error : state.Users.error,
        loading: state.Users.loading
    }
}

let mapDispatchToProps = dispatch =>{
  return {
    //    sending action for getting data
      fetchUserData : ()=>dispatch(UsersActions.fetchUsers())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersBlock)