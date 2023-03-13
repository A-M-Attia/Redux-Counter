

import {createSlice} from '@reduxjs/toolkit'

const initialState = {counter: 0, toggle:true}

createSlice({
    name: increment,
    initialState:initialState,
    reducers: {
        increment(){},
        decrement(){},
        toggle(){}


    }
})
