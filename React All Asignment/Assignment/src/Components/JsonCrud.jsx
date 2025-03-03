import React, { useEffect, useState } from 'react'
import axios from 'axios';

const JsonCrud = () => {
    const [datalist, setDatalist] = useState({
        name:"",
        age:""
    })
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
    },[])

    // onchage Event handler
    const HandleChange=(e)=>{
        const {name,value} = e.target;
        setDatalist({
            ...datalist,
            [name]:value
        })
        console.log(datalist)
    }

    const HandelSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/users',datalist)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))

        setDatalist({
            name:"",
            age:""
        })
    }

    const deldata = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(res => {
                console.log(res.data);
                setData(data.filter(item => item.id !== id)); 
            })
            .catch(err => console.log(err));
    };
    
    const editdata = (id) => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => {
                setDatalist(res.data); 
                setEditId(id); 
            })
            .catch(err => console.log(err));
    };

  return (
    <>
        <h2>Crud operation with Json Server</h2>
        <form action="#" method='post' onSubmit={HandelSubmit}>

               <label htmlFor="#">Name:</label>
               <input type="text" name='name' value={datalist.name} onChange={HandleChange}/><br /><br />

               <label htmlFor="#">Age:</label>
               <input type="text" name='age' value={datalist.age}  onChange={HandleChange} /><br /><br />

            <button>Save Data</button><br /><br />

        </form>

        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>
                                        <button onClick={()=> editdata(i.id)}>Edit</button>
                                        <button onClick={() => deldata(i.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default JsonCrud