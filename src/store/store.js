import React from "react";
import {createStore} from "redux"
import combineReducers from "./reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";


// const reducer = (state = {counter: 0} , action)=>{

//     switch (action.type) {
//         case inc:
//            return { counter: state.counter + 1}
//             ;
    
//             case dec:
//            return { counter: state.counter - 1}
               
//         default:
//            return state;
//     }

const store = createStore(combineReducers, composeWithDevTools())
// const store = createStore(reducer)



export default store
