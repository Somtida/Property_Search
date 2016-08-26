import React, { Component } from 'react'

import PropertiesActions from '../actions/PropertiesActions'
import PropertyStore from '../stores/PropertyStore'
import PropertiesDisplay from './PropertiesDisplay'

export default class Properties extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      properties: {},
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.pickValue = this.pickValue.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
    this.state.name === ''  ? null : PropertiesActions.getAllProperties(this.state.name);
    this.setState({name: ''})
  }

  componentDidMount() {
    PropertyStore.startListening(this._onChange);

  }

  componentWillUnmount() {
    PropertyStore.stopListening(this._onChange)
  }

  _onChange() {
    console.log('this:',this);
    console.log('properties:', PropertyStore.getAllProperties());
    this.setState({properties: PropertyStore.getAllProperties()});
  }

  pickValue(selected){
    console.log('selected: ', selected);

    if(selected === "name"){
      this.setState({properties: this.state.properties.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} )});
    }
    if(selected === "value"){
      this.setState({properties: this.state.properties.sort(function(a,b) {return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0);} )});
    }
  }


  render() {
    const space = {
      marginTop: '30px',
      marginBottom: '30px',
      paddingBottom: '30px',
    }

    console.log('properties',this.state.properties.length);
    return (
      <div className="text-center">
        <div style={space}>
          <form>
            <div className="col-xs-12 col-md-8 col-lg-8">
              <input
                className="form-control"
                type="text"
                placeholder="quotationStart"
                value={this.state.name}
                onChange={e => this.setState({name: e.target.value})}
              />
            </div>
            <div className="col-xs-12 col-md-4 col-lg-4">
              <button
                className="btn btn-success form-control"
                type="submit"
                onClick={this.onSubmit}>Search
              </button>
            </div>
          </form>
        </div>
        {this.state.properties.length ?
          <div className="text-right">
            <label>Sort by:</label>
            <select onChange={e => this.pickValue(e.target.value)}>>
              <option value="name">Name</option>
              <option value="value">Value</option>
            </select>
          </div> :
          null
        }
        <div style={space}>
          {this.state.properties.length ?
            <PropertiesDisplay properties={this.state.properties} style={space} /> : <p>No Property To Display</p>
          }
        </div>
      </div>
    )
  }
}