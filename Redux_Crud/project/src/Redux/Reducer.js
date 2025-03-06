import {add, minus} from "./Action"

const initialState={
    count:0
}

const Reducer = (state=initialState,action) => {
    switch(action.type){
        case add: return{
            ...state,
            count:state.count+1
        }

        case minus: return{
            ...state,
            count:state.count-1
        }
        
        default: return state
    }
}

export default Reducer