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
    <div>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem