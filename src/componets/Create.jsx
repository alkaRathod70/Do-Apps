import React, { useState } from 'react'
import { addUser } from './UserReducer'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [job,setJob]=useState('')
    const [salary,setSalary]=useState('')

    const users=useSelector((state)=>state.users);
    
    const navigate=useNavigate()

    const dispatch =useDispatch();

    const handleSubmit =(e)=>{
      e.preventDefault();
      dispatch (addUser ({id:users[users.length-1].id + 1,name, email,job,salary}))
      navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-50 mt-5 justify-content-center aling-item-center'>
      <div className='w-50  border bg-secondary text-white p-5'>
        <h1> Add New User</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Name :-</label>
          <input type="text" name='name'placeholder='Enter your name' className='form-control' onChange={e=>setName(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="email">Email :-</label>
          <input type="email" name='email' placeholder="Enter your email" className='form-control' 
          onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="job">Job :-</label>
          <input type="job" name='job' placeholder='Enter your job' className='form-control'
          onChange={e=>setJob(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="salary">Salary:-</label>
          <input type="salary" name='salary' placeholder='Enter your salary' className='form-control' 
          onChange={e=>setSalary(e.target.value)}/>
          </div>
          <button className='btn btn-info mt-4' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
