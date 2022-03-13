/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react"

import { TaskForm } from "./TaskForm"
import { TaskBody } from "./TaskBody"
import { storage } from "./storage";

export function List(props) {
  const { priority } = props;

  storage.get();
  const [taskList, setTaskList] = useState(storage.lists[priority]);
  const [taskName, setTaskName] = useState('');
  
  useEffect(() => {
    storage.get();
    return () => {
      storage.save()
    };
  })

  

  const deleteTask = (id) => {
    setTaskList(
      storage.lists[priority].filter((task) => {
        task.props.id !== id;
      })
    )
  }

  const checkTask = (id) => {
    setTaskList(
      storage.lists[priority].map((task) => {
        task.checked = task.props.id === id ? !task.checked : task.checked;
        return task;
      })
    )
  }

  const addTask = function(name){
    setTaskName(name);

    storage.lists[priority].unshift(
      <TaskBody key={storage.freeId} id={storage.freeId} name={name} priority={priority} checked={false} onDelete={deleteTask} onChecked={checkTask}></TaskBody>
    );
    storage.freeId++;

    setTaskList(storage.lists[priority]);
  }

  const createTask = (task) => {
    const { key, checked } = task;
    const { id, name, priority } = task.props;
    return(
      <TaskBody key={key} id={id} name={name} priority={priority} checked={checked} onDelete={deleteTask} onChecked={checkTask}></TaskBody>
    )
  }

  return (
    <div>
      <TaskForm value={taskName} onSubmit={addTask}></TaskForm>
      <div className="low-tasks">
        {taskList.map( createTask )}
      </div>
    </div>
  )
}