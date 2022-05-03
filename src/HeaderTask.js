import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItems from './TaskItems';


export default function HeaderTask() {
const tasks=useSelector((state)=>state.todo);
const undoneTask=tasks.filter(t=>t.done!==true).length;


  return (
    <div className='header'>
       
        <h1>TODO HEADER</h1>
        <p>Undone items: {undoneTask}</p>
    </div>
  )
}
