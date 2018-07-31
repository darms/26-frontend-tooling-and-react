'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { say } from 'cowsay';


import scss from './style/main.scss';

const faker = require('faker');


class App extends React.Component{
  constructor(props){
    
    super(props);
    
    this.state = { content: say({ text: 'I am a cow full of wisdom!'}) 
  };
    
    this.handleClick = this.handleClick.bind(this);
  }

 render(){
    return (
    <React.Fragment>
      <h1>Generate Cowsay Lorem</h1>
      <button onClick={this.handleClick}>click me</button>
      <pre>{ this.state.content }</pre>
    </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('base'));
