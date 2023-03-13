
 import {combineReducers} from 'redux'
import inc from "./incrementReducer"
import toggle from "./toggleReducer"


export default combineReducers({
    counter : inc,
    toggle

})