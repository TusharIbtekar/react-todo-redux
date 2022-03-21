import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { TextField } from '@mui/material'

import { saveTodo } from '../features/todos/todoSlice'

const Input = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  let id = 0

  const addTodo = () => {
    console.log(input);
    setInput("");
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now(),
    }))
  }

  return (
    <>
      {
        <div className='d-flex flex-row justify-content-between w-100'>
          <TextField className='me-4 w-75' label="ToDo" variant="standard" value={input} onChange={e => setInput(e.target.value)} />
          <button className='btn btn-outline-success' onClick={addTodo}>ADD</button>
        </div>
      }



    </>
  )
}

export default Input