import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const [read, setRead] = useState({
        name:"",
        email:"",
        username:""
    })

    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:3000/myusers/"+ id)
        .then(res => setRead(res.data))
        .catch(err => console.log(err))
    })
  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Detail of User</h1>
            <form>
                <div className='mb-2'>
                    <strong>Name: {read.name}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Email: {read.email}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Username: {read.username}</strong>
                </div>
                
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                <Link to="/" className='btn btnprimary ms-3'>Back</Link>
                
            </form>
        </div>
    </div>
    </div>
  )
}

export default Read