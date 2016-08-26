import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
