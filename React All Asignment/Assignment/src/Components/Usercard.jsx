import React from 'react'

const Usercard = ({name,age,location}) => {
  return (
    <div>
        <h2>The Name is -- {name}</h2>
        <h2>The Age is -- {age}</h2>
        <h2>The Location is -- {location}</h2>
    </div>
  )
}

export default Usercard