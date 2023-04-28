import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [addres, setAddres] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      setId(localStorage.getItem('id'));
      setName(localStorage.getItem('name'));
      setAge(localStorage.getItem('age'));
      setAddres(localStorage.getItem('addres'));
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://63b3f7299f50390584a2c2aa.mockapi.io/crud/${id}`,{
            name: name,
            age: age,
            addres: addres
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
            <div className='mb-2 mt-2'>
                <Link to='/'>
                    <button className='btn btn-primary'>Read Data</button>
                </Link>
            </div>
            <div className='bg-primary p-4 text-center'>
                <h1>Update Data</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='form-group'>
                    <label>Enter Name: </label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Enter Age: </label>
                    <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Addres: </label>
                    <input type='addres' value={addres} onChange={(e) => setAddres(e.target.value)} placeholder='Addres' className='form-control' />
                </div>
                <br />
                <div className='d-grid'>
                    <input type='submit' value='Update' className='btn btn-primary' />
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default Edit