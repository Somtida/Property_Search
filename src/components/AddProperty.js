import React, { Component } from 'react'
import Property from './Property';
import PropertiesActions from '../actions/PropertiesActions'

export default class AddProperty extends Component {
  constructor(props){
    super(props);
    this.state = {
      folderName: '',
      key: '',
      value: '',
    }
    this.addAProperty = this.addAProperty.bind(this);
  }

  addAProperty(event){
    event.preventDefault();
    console.log('adding a property');
    if(this.state.folderName.length && this.state.key.length && this.state.value.length){
      PropertiesActions.addNewTenant(this.state);
      this.setState({folderName: '', key: '', value: ''})
      this.props.added(false);
    }else{
      alert('please input value')
    }
  }

  render() {
    console.log('this.props',this.props);
    return (
      <div>
        <form>
          <div className="col-xs-2 col-md-2 col-lg-2 text-left">
            <input
              className="form-control"
              type="text"
              placeholder='"af"'
              onChange={e => this.setState({folderName: e.target.value})}
              required
            />
          </div>
          <div className="col-xs-3 col-md-3 col-lg-3 text-left">
            <input
              className="form-control"
              type="text"
              placeholder='"quotationMark"'
              onChange={e => this.setState({key: e.target.value})}
              required
            />
          </div>
          <div className="col-xs-3 col-md-3 col-lg-3 text-left">
            <input
              className="form-control"
              type="text"
              placeholder='"?"'
              onChange={e => this.setState({value: e.target.value})}
              required
            />
          </div>
          <div className="col-xs-2 col-md-2 col-lg-2 text-left">
            <button
              className="btn btn-warning form-control"
              type="submit"
              onClick={this.addAProperty}>Add
            </button>
          </div>
          <div className="col-xs-2 col-md-2 col-lg-2 text-left">

          <button
            className="btn btn-default form-control"
            onClick={() => this.props.added(false)}
            >
              Cancel
          </button>
          </div>
        </form>
      </div>
    )
  }
}
