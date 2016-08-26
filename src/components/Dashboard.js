import React, { Component } from 'react'
import Properties from './Properties'

export default class Dashboard extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="text-center">
        <div className="alert alert-info">
          <h1>Welcome to Property Search!</h1>
        </div>
        <Properties />
      </div>
    )
  }
}
