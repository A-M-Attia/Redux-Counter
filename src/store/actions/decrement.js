
import React from 'react'

export default function decrement(payload) {
  return (
    {
        type: "DECREMENT",
        payload
    }
  )
}
