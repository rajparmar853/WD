import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count:0
}

const CounterReducer = createSlice({
    name:"counter",
    initialState,
    reducers:{
        add:(state)=>{
            state.count +=1
        }, 
        minus:(state)=>{
            state.count -=1
        }
    }
})

export const{add,minus} = CounterReducer.actions
export default CounterReducer.reducer