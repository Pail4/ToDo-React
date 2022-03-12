/* eslint-disable react/prop-types */
import './style.css'
import React from 'react'

import { List } from './components/List'

function App(){

  return (
    <div className='wrapper'>
      <h3>HIGH</h3>
      <List priority="high"></List>
      <h3>LOW</h3>
      <List priority="low"></List>
    </div>
  )
}

export default App
