/* eslint-disable react/prop-types */
import React, {useState} from "react"
import { storage } from "./storage";

//ToDo: set changes in storage, create delete task.

export function TaskBody(props) {
  const [isFinished, setIsFinished] = useState(false);

  const onCheckbox = function(){
    setIsFinished(!isFinished)
    storage.lists[props.priority];
  }

  const deleteTask = function() {

  }

  return (
    <div className={'task ' + (isFinished && 'done')}>
      <form action="">
        <input type="checkbox" name={props.name} id={props.id} onChange={onCheckbox} checked={isFinished} />
        <label htmlFor={props.name}>{props.name}</label>
        <button></button>
      </form>
    </div>
  )
}