

import React from 'react'

export default function toggleReducer(state = true, action) {
    if(action.type === "TOGGLE") {
        return !state
    }
  return state
}
