/* eslint-disable react/prop-types */

import React, {useState} from "react"

import { TaskForm } from "./TaskForm"
import { TaskBody } from "./TaskBody"
import { storage } from "./storage";

export function List(props) {
  const [taskName, setTaskName] = useState('');

  const addTask = function(name){
    setTaskName(name);

    storage.lists[props.priority].unshift(
      <TaskBody key={storage.freeId} id={storage.freeId} name={name} priority={props.priority}></TaskBody>
    );
    storage.freeId++;
  }

  return (
    <div>
      <TaskForm value={taskName} onSubmit={addTask}></TaskForm>
      <div className="low-tasks">
        {storage.lists[props.priority]}
      </div>
    </div>
  )
}