import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Home() {

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/myusers")
        .then(resp => setData(resp.data))
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const hanndleDelete=(id)=>{
        const confirm = window.confirm("Would you like to delete")
        if(confirm){
            axios.delete("http://localhost:3000/myusers/"+ id)
            .then(res=> {
                window.location.reload();
            }).catch(err=>{
                console.log(err)
            })
        }
       
      }

  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100' >
        <h1>List of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,i)=>{
                        return <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            {/* <td>{item.address}</td> */}
                            <td>
                                    <Link to={`/read/${item.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                    <Link to={`/update/${item.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={e => hanndleDelete(item.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                        </tr>
                    })}
                   
                </tbody>
            </table>
        </div>
    </div>
    </>
   
  )

  
}

export default Home