import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minusCounter } from './Redux/Action';

const Redux_Example = () => {
    const count = useSelector((state)=>state.count)
    const  dispatch = useDispatch();
  return (
    <div>
        <h3>Redux Example</h3>
        <h4>Count is = {count}</h4>
        <button onClick={()=>dispatch(addCounter())}>Add</button>
        <button onClick={()=>dispatch(minusCounter())}>Minus</button>
    </div>
  )
}

export default Redux_Example 