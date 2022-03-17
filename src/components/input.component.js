import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todos/todoSlice'

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  let id = 0

  const addTodo = () => {
    console.log(input);
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  }

  return (
    <>
      <input type='text' onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>ADD</button>
    </>
  )
}

export default Input