import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/redux';


export default function () {
    const [text, setText]=useState();
    const dispatch=useDispatch();

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addTask(text));
        setText('');
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input value={text} type={'text'} className='input-text' onChange={(event)=>setText(event.target.value)} />
                <br/>
              </form>

        </div>
    )
}
