import React, { useState } from 'react'

const Fruit = () => {

    const [fruits, setFruits] = useState([])
    const [data, setData] = useState({
      name:''
    })

   const saveData = (e) =>{
      e.preventDefault();
      console.log(data)
      // setFruits.push(data)
      setFruits([...fruits,data])
      setData({name:""})
   } 

  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <h2>List Of Fruits Name</h2>
        <input type="text" placeholder='Enter Fruits Name' value={data.name} onChange={(e)=>setData({name:e.target.value})} /> <br /><br />
        <button>Save Data</button>
      </form>
          
            {
              fruits.map((i,index)=>{
                return(
                  <ul  key={index}>
                    {/* <li>{i.id}</li> */}
                    <li>{i.name}</li>
                  </ul>
                )
              })
            }
          
    </div>
  )
}

export default Fruit