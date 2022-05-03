import React, { useState } from 'react';
import './App.css';
import HeaderTask from './HeaderTask';
import TaskItems from './TaskItems';
import TaskInput from './TaskInput';
import { Provider } from 'react-redux';
import { store } from './redux/redux'

function App() {

  const [tasks, setTasks] = useState();
  



  return (
    <Provider store={store}>
      <div className="App">
        <HeaderTask />
        <TaskItems />
        <TaskInput />
      </div>
    </Provider>
  );
}

export default App;
