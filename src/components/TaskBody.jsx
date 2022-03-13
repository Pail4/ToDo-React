/* eslint-disable react/prop-types */
import React, {useState} from "react"
import { storage } from "./storage";


export function TaskBody(props) {
  const [isFinished, setIsFinished] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const { id, name, checked } = props;


  return (
    !isDeleted &&
    <div className={'task ' + (isFinished && 'done')}>
      <form action="" onSubmit={ () => {props.onDelete(id)} } >
        <input type="checkbox" name={name} id={id} onChange={ () => { props.onChecked(id); } } checked={checked} />
        <label htmlFor={name}>{name}</label>
        <button></button>
      </form>
    </div>
  )
}