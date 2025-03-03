import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchApi() {

  const [data,setData] = useState([])
  

  useEffect (()=>{
      axios.get('https://dummyjson.com/products') 
        .then((res)=>setData(res.data.products)) 
        .catch((err)=>console.log(err))
  },[])

  return (
    <div>
      <h2>Fetch Api</h2>
      <table border={1}> 
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Images</th>
          </tr>
        </thead>
      <tbody>
        {
            data.map((i,index)=>{
              return(
                <tr key={index}> 
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.price}</td>
                  <td>{i.category}</td>
                  <td><img src={i.images[0]} alt="not working"  style={{ width: "100px", height: "100px", borderRadius: "8px" }}/></td>
                </tr>
              )
            })
        }
      </tbody>
      </table>

    </div>
  ) 
}

export default FetchApi