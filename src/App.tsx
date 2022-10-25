import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import {ITask} from './Interfaces';
import {nanoid} from 'nanoid';
import SingleTask from './components/SingleTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [list, setList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name==='task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value))
    }
  }
  const addTask = (): void => {
    const newTask = {taskName:task, deadline:deadline, id: nanoid()};
    setList([...list, newTask])
    setTask('')
    setDeadline(0)
    console.log(list)
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type='text' placeholder='Task...' value={task} name='task' onChange={handleChange}/>
          <input type='number' placeholder='Deadline (in Days)...' value={deadline} name='deadline' onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {list.map((task: ITask)=> {
              return <SingleTask task={task} key={task.id} />
          })}
      </div>
    </div>
  );
}

export default App;
