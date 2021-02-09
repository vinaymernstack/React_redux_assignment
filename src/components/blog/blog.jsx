import React,{useState} from 'react'
import {blogActions} from '../../redux/actions/blogActions'
import { connect } from "react-redux";
/**
* @author
* @function Blog
**/

const Blog = (props) => {
    const [blog,setblog] = useState("")
    const addblog = ()=>{
        if(blog){
          props.addblog(blog)
          setblog("")
        }
    }

   
  return(
    <div>
        <input type="text" className="form-input" value={blog} onChange={(e)=>{setblog(e.target.value)}}/>
       <button className="btn btn-sm btn-primary mx-4" onClick={addblog}>Add blog</button>

       <div>
        <table>
            
         {props.blogslist.map((data,i)=>{
            return <tr key={i} >
               <td className="p-3"> {data} </td> <td> <button className="btn btn-danger btn-sm" onClick={()=> props.deleteblog(i)}>Delete</button></td> </tr>
        })} 
        </table>
    </div>
    </div>
   )
  }

  let mapStateToProps = state =>{
    return{
        blogslist : state.Blog.blogs
    }
}

let mapDispatchToProps = dispatch =>{
  return {
     addblog : (data)=>dispatch(blogActions.addblog(data)),
      deleteblog : (index)=>dispatch(blogActions.deleteblog(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog)