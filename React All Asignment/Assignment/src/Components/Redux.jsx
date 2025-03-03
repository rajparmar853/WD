import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus } from '../rtk/CounterReducer'


const Redux = () => {
    const val = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>this is the redux</h2>
        <h3>{val}</h3>
        <div>
            <button onClick={()=>dispatch(add())}>Add</button>
            <button onClick={()=>dispatch(minus())}>Minus</button>
        </div>
    </div>
  )
}

export default Redux