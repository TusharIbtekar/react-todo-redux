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
      <div className='d-flex flex-row justify-content-center w-100'>
        <input className='me-4 w-50' type='text' onChange={e => setInput(e.target.value)} />
        <button className='btn btn-outline-success' onClick={addTodo}>ADD</button>
      </div>
    </>
  )
}

export default Input