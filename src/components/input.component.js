import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Tooltip } from '@mui/material';

import { saveTodo } from '../features/todos/todoSlice'

const Input = () => {
  const [input, setInput] = useState('');
  // const [showInput, setShowInput] = useState(false);

  const dispatch = useDispatch();
  let id = 0

  const addTodo = () => {
    console.log(input);
    setInput("");
    // setShowInput(false)
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  }

  return (
    <>
      {
        // showInput ? 
        <div className='d-flex flex-row justify-content-between w-100'>
          <input className='me-4 w-75' type='text' value={input} onChange={e => setInput(e.target.value)} />
          <button className='btn btn-outline-success' onClick={addTodo}>ADD</button>
        </div>

        // : <Tooltip title="Add TODO" >
        //   <AddCircleIcon fontSize="large" onClick={() => setShowInput(true)} />
        // </Tooltip>
      }



    </>
  )
}

export default Input