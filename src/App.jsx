/* eslint-disable react/prop-types */
import './App.css'
import React from 'react'

import { API } from './components/API.js'
import { Form } from './components/Form'
import { Result } from './components/Result'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gender: undefined}
    this.setGender = this.setGender.bind(this);
  }

  setGender(name) {
    if  (name.length < 2){
      this.setState({warn: "Name less 2 symbols"});
      return;
    }
    
    const url = API.getUrl(name);
    fetch(url).then(response => response.json())
      .then((obj) => {
        this.setState({ 
          gender: obj.gender,
          warn: false
         })
      })
  }

  render() {
    return (
      <div className='App'>
        <Form onChange={this.setGender} ></Form>
        <Result gender={this.state.gender} warn={this.state.warn}></Result>
      </div>
    );
  }
}

export default App
