import React, { useState } from 'react'

export default function OnSubmit() {


    const [text, setText]=useState({
        name: "",
        lastname: ""
    })

    function handleSubmit(e){
        e.preventDefault();
        alert("Form submitted successfully!")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name<sup>*</sup></label>
            <input type="text" value={text.name} required onChange={(e)=> setText(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
