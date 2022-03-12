/* eslint-disable react/prop-types */
import React from "react";


export class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.warn) return <Warn></Warn>;

    return (
      <div>
        {this.props.gender && <h1>You are {this.props.gender}?</h1>}
      </div>
    )
  }
}

function Warn() {
  return (
    <div>
      Your name must be atleast 2 symbols! <br />
    </div>
  )
}