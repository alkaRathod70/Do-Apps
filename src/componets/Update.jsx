import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import { updateUser } from './UserReducer'
import {useDispatch} from 'react-redux'
import{useNavigate} from 'react-router-dom'


const Update = () => {
  const {id} = useParams();
  const users = useSelector((state)=>state.users);
  // const existingUserArray = users.filter(singleItem => singleItem.id == id);
  // const existingUser = users.filter(f=>f.id==id);
  const existingUserArray = users.filter(singleItem => singleItem.id == id);
  const {name,email,job,salary} = existingUserArray[0];

  const [uname,setName]=useState(name)
  const [uemail,setEmail]=useState(email)
  const [ujob,setJob]=useState(job)
  const [usalary,setSalary]=useState(salary)

  const dispatch = useDispatch();
 const navigate = useNavigate();



const handelUpdate =(e)=>{
  e.preventDefault();
  dispatch(updateUser({
    id:id,
    name:uname,
    email:uemail,
    job:ujob,
    salary:usalary
  }))
  navigate('/')
}

  return (
    <div className='d-flex w-100 vh-50 mt-5 justify-content-center aling-item-center'>
      <div className='w-50  border bg-secondary text-white p-5'>
        <h1> Update User</h1>
        <form onSubmit={handelUpdate}>
          <div>
          <label htmlFor="name">Name :-</label>
          <input type="text" name='name'placeholder='Enter your name' className='form-control' 
          value={uname} onChange={e=>setName(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="email">Email :-</label>
          <input type="email" name='email' placeholder="Enter your email" className='form-control' 
          value={uemail}  onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="job">Job :-</label>
          <input type="job" name='job' placeholder='Enter your job' className='form-control' 
          value={ujob}  onChange={e=>setJob(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="salary">Salary :-</label>
          <input type="salary" name='salary' placeholder='Enter your salary' className='form-control' 
          value={usalary}  onChange={e=>setSalary(e.target.value)}/>
          </div>
          <button className='btn btn-info mt-4'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update
