import React, { useState } from 'react'

const Input = () => {
  const [input, setInput] = useState('')

  const addTodo = () => {
    console.log(input);
  }

  return (
    <>
      <input type='text' onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>ADD</button>
    </>
  )
}

export default Input