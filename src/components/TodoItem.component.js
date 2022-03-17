import React from 'react'

const TodoItem = ({ name, done, id }) => {
  return (
    <div>
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem