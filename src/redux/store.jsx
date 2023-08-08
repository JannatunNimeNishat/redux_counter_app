import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

import myLogger from "./middlewares/myLogger";

import logger from "redux-logger";

//create our first middleware
/* const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming State ${JSON.stringify(upcomingState)}`);
    //pass action
    return next(action)
} */


// const store = createStore(rootReducer, applyMiddleware(myLogger));
const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;


