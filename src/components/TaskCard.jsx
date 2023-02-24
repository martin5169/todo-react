import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({task}) {
  
  const {deleteTask} = useContext(TaskContext)

  return (
    <div className='bg-gray-800 text-white p-2 rounded-md mb-2  ml-1 w-full'> 
      <h3 className='text-xl font-bold capitalize text-center'>{task.title}</h3>
      <p className='text-gray-500 text-sm text-justify'>{task.description}</p>
    <button className='bg-red-500 py-1 rounded-md mt-3 hover:bg-red-400 w-full'onClick={() => deleteTask(task.id)}>Eliminar</button>
  </div>
  )
}

export default TaskCard
