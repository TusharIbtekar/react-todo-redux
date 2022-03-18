import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox } from '@mui/material'

import { fetchTodoList, setCheck } from '../features/todos/todoSlice'

const TodoItem = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(fetchTodoList)

  const handleCheck = (id) => {
    dispatch(setCheck(id))
  }

  return (
    <div className='w-100 mt-2'>
      <div className=''>
        {
          todoList.map(item => (
            !(item.done) ?
              <div className='d-flex flex-row align-items-center justify-content-start'>
                <Checkbox
                  checked={item.done}
                  color='primary'
                  onChange={() => handleCheck(item.id)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <p className='my-0'>{item.item}</p>
              </div> : null
          ))
        }
      </div>
      <br />

      <div className='d-flex justify-content-center'>
        <Accordion className='w-100'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Done</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {
                todoList.map(item => (
                  item.done ?
                    <div className="d-flex flex-row align-items-center">
                      <Checkbox
                        checked={item.done}
                        color='primary'
                        onChange={() => handleCheck(item.id)}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                      <p className='my-0' style={{ textDecoration: 'line-through' }}>{item.item}</p>
                    </div> : null
                ))
              }
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>


    </div >
  )
}

export default TodoItem