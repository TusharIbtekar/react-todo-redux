import React from 'react'
import { Checkbox } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todos/todoSlice'

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  return (
    <div className='d-flex flex-row align-items-center w-100' style={{ paddingLeft: '21%' }}>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <p className='my-0'>{name}</p>
    </div>
  )
}

export default TodoItem