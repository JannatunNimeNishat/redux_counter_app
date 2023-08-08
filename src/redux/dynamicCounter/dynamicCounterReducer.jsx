import { DINCREMENT, DDECREMENT } from "../dynamicCounter/actionTypes";

const initialSate = {
    value:0,
};

const dynamicCounterReducer = (state =initialSate, action) => {
    switch (action.type) {
        case DINCREMENT:
            return {
                ...state,
                value:state.value + action.payload,
            }    
        case DDECREMENT:
          
            return {
                ...state,
                value: state.value - action.payload,
            }
    
        default:
            return state;
    }
}

export default dynamicCounterReducer;