/* eslint-disable react/prop-types */
import React, {useState} from "react"


export function TaskBody(props) {
  const [isFinished, setIsFinished] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const onCheckbox = function(){
    setIsFinished(!isFinished)
  }

  const deleteTask = function(event) {
    event.preventDefault();

    setIsDeleted(true);
  }

  return (
    !isDeleted &&
    <div className={'task ' + (isFinished && 'done')}>
      <form action="" onSubmit={deleteTask}>
        <input type="checkbox" name={props.name} id={props.id} onChange={onCheckbox} checked={isFinished} />
        <label htmlFor={props.name}>{props.name}</label>
        <button></button>
      </form>
    </div>
  )
}