import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from "react-redux";
import UsersActions from '../../redux/actions/usersActions'
import Axios from 'axios'

const UsersBlock = (props) => {
    const dispatchAction = useDispatch()
    useEffect(()=>{
        let data={
            firstname:"vinay"
        }
        Axios.post("http://localhost:1405/first",data).then((res)=>{
            console.log(res)
        })
    },[])
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
            {
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
    return{
        usersData : state.Users.users,
        error : state.Users.error,
        loading: state.Users.loading
    }
}

let mapDispatchToProps = dispatch =>{
  return {
      fetchUserData : ()=>dispatch(UsersActions.fetchUsers())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersBlock)