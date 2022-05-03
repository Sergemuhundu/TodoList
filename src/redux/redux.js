import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:[
        {id:1, text:'faire le shopping', done:false},
    {id:2, text:'faire la vesselle', done:true}],
    reducers:{
        addTask:(state, action)=>{
                const newTask={
                    id:Date.now(),
                    text:action.payload,
                    done:false
                };
                state.push(newTask);
        },
        deleteTask:(state, action)=>{
            state=state.filter(t=>t.id!=action.payload);
            return state;
        },
        toggleTask:(state, action)=>{
            const realTask=state.find(t=>t.id==action.payload);
            
            realTask.done=!realTask.done;
        }
    }
});

export const { addTask, deleteTask, toggleTask }=todoSlice.actions;

export const store=configureStore({
    reducer:{
        todo:todoSlice.reducer,
    }
});