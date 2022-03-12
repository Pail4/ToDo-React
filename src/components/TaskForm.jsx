/* eslint-disable react/prop-types */

import React, {useState} from "react";

import { TaskFormInput } from "./TaskFormInput";

export function TaskForm(props) {
  const [value, setValue] = useState('');

  const onValueSubmit = function(event){
    event.preventDefault();
    props.onSubmit(value);
    setValue('');
  }

  return (
    <div className="add-task">
      <form action="" onSubmit={onValueSubmit}>
        <TaskFormInput value={value} onChange={setValue}></TaskFormInput>
        <button className="submit-task"></button>
      </form>
    </div>
  )
}