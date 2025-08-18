import React, { createContext } from 'react'
import B from './B'
export const Pass = createContext();

export default function A() {
    let name="Vignesh"
  return (
    <div>
        <h1>A Component</h1>
        <Pass.Provider value={name}>
            <B />                   
        </Pass.Provider>
    </div>
  )
}
