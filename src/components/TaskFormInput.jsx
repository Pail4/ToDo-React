/* eslint-disable react/prop-types */
import React from "react"


export function TaskFormInput(props) {
  
  const onValueChange = function(event){
    props.onChange(event.target.value);
  }

  return (
    <input className="new-task" type="text" onChange={onValueChange} value={props.value} placeholder="Добавить дел" data-priority="low" />
  )
}