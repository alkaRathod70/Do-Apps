import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from './UserReducer';
const Home = () => {

  const users = useSelector((state)=>state.users);
 
 const dispatch = useDispatch();

  const handleDelete = (id)=>{
     dispatch (deleteUser({id:id}))
  }
  // console.log(users)
  return (
    <div className='container'>
      <h1 className='d-flex mt-5 justify-content-center aling-item-center'>Curd App</h1>
     <Link to="/Create" className='btn btn-success my-3'>create +</Link>
     <table className='table border border-warning border-2 '>
     <thead className='border border-danger border-2'>
             <tr>
              <th>Id</th>
                 <th>name</th>
                 <th>Email</th>
                 <th>Job</th>
                 <th>Salary</th>
                 <th className='ms-5'>Action</th>
             </tr>
         </thead>
         <tbody>
          {users.map((user,index)=>(
            <tr key={index}>
               <td className='border border-warning border-1'>{user.id}</td>  
               <td  className='border border-warning border-1'>{user.name}</td>  
               <td  className='border border-warning border-1'>{user.email}</td>  
               <td  className='border border-warning border-1 '>{user.job}</td>  
               <td  className='border border-warning border-1'>{user.salary}</td> 
               <td className='border border-warning border-1'>
                 <Link  to={`/edit/${user.id}`}className='btn btn-sm btn-primary ms-2'>Edit</Link>
                 <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
              </td> 
            </tr>
          ))}
         </tbody>
     </table>
    </div>
  )
}

export default Home
