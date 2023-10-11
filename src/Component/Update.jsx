import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Axios } from 'axios'
function Update() {
    const [data, setData] = useState([])
    const {id} = useParams();
    const [value, setValue] = useState({
        name:"",
        email:"",
        username:""
    })

    const navigate = useNavigate();
    const handleUpdate =(event)=>{
        event.preventDefault();
        axios.put("http://localhost:3000/myusers/"+id, value)
        .then(res =>{
           setValue(res.data)
           navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
            <div className='mb-2'>
                <label htmlFor='name'>Name:</label>
                <input type='text' className='form-control' name='name' placeholder='Enter Name'
              value={value.name}  onChange={e =>setValue({...value, name:e.target.value})} />
            </div>
            <div className='mb-2'>
                <label htmlFor='name'>Email:</label>
                <input type='email' className='form-control' name='email' placeholder='Enter Email'
              value={value.email}  onChange={e =>setValue({...value, email:e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='name'>Username:</label>
                <input type='text' className='form-control' name='name' placeholder='Enter Username'
              value={value.username}  onChange={e =>setValue({...value, username:e.target.value})}/>
            </div>
            <button className="btn btn-success">Update</button>
            <Link to="/" className='btn btnprimary ms-3'>Back</Link>
            
        </form>
    </div>
</div>
  )
}

export default Update