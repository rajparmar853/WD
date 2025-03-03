import React, { useState } from 'react'

const Crud = () => {
        const [datalist, setDatalist] = useState([])
        const [data, setData] = useState({
            name:'',
            email:'',
            password:''
        })

        const saveData = (e) =>{
            e.preventDefault();
            console.log(data)
            setDatalist([
                ...datalist,data
            ])
            setData({
            name:'',
            email:'',
            password:''
            })
        }

        const handleSubmit= (e)=>{
            e.preventDefault()
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            
            if(data.name == ''){
                alert('Please Enter your name')
            }
            else if(!emailRegex.test(data.email)){
                alert('Please Enter valid Email address')
            }
            else if(!passwordRegex.test(data.password)){
                alert('please Enter password with 1 special character, 1 uppercas Letter, 1 lowercase Letter, Atleast one Digit and length of password should be 8 Leeter .')
            }
            else{
                setDatalist([...datalist,data])
                setData({
                    name:'',
                    email:'',
                    password:'' 
                })
            }
        }

    return (
    <>
        <form action="#" method='post' onSubmit={handleSubmit}>

            <label htmlFor="#">Name:</label><br />
            <input type="text" placeholder='Enter Name' name='name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} /><br /><br />
        
            <label htmlFor="#">Email:</label><br />
            <input type="text" placeholder='Enter Email' name='email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} /><br /><br />

            <label htmlFor="#">Password:</label><br />
            <input type="text" placeholder='Enter Password' name='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/><br /><br />

            <button>Save Data</button>

        </form>

        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>

            <tbody>
                {
                    datalist.map((i,index)=>{
                        return(
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.password}</td>
                        </tr>
                        )
                    })
                }
            </tbody>

        </table>

    </>
  )
}

export default Crud