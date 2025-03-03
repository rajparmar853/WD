import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './CounterReducer'

const CounterStore = configureStore({
    reducer:{
        counter:CounterReducer
    }
})  

export default CounterStore