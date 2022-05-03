import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskItems =(props)=> {
   const tasks=useSelector((state)=>state.todo);
    

  return (
    <div className='task-items'>
        {tasks.map((task)=>(
            <TaskItem key={task.id} task={task} />
        ))}
    </div>
  )
}
export default TaskItems;
