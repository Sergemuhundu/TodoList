import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './redux/redux';

 const TaskItem =({ task})=> {

    const dispatch=useDispatch();
    
  return (
    <div className='item'>
        <input type={'checkbox'} 
        checked={task.done} 
        onChange={()=>dispatch(toggleTask(task.id))} />
        <p>{task.text}</p>
        <button onClick={()=>dispatch(deleteTask(task.id))}>Supprimer</button>
    </div>
  )
}
export default TaskItem;
