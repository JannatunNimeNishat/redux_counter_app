import { INCREMENT, DECREMENT } from "./actionType";

const initialSate = {
    value:20,
};

const counterReducer = (state =initialSate, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log('increment');
            return {
                ...state,
                value:state.value + 1,
            }    
        case DECREMENT:
            console.log('decrement');
            return {
                ...state,
                value: state.value - 1,
            }
    
        default:
            return state;
    }
}

export default counterReducer;