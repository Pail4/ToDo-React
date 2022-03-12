/* eslint-disable react/prop-types */
import './style.css'
import React, {useEffect} from 'react'

import { List } from './components/List'
import { storage } from './components/storage'

// ToDO: cookies

function App(){

  // useEffect(() => {
  //   storage.get();
  //   return storage.save;
  // })


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
