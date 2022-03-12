/* eslint-disable react/prop-types */
import React from 'react'

export class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action="" onSubmit={(e) => {e.preventDefault();}}>
        <Input value={this.props.value} onChange={this.props.onChange}></Input>
        <Button></Button>
      </form>
    );
  }
}

function Input(props){
  const handleChange = function(event){
    props.onChange(event.target.value);
  }
  return (
    <input type="text" value={props.value} onChange={handleChange} placeholder='Who are you, sweetie?' />
  )
}

function Button(){
  return (
    <button>*useless btn*</button>
  )
}