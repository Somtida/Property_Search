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
    if(this.state.folderName.length && this.state.key.length && this.state.value.length){
      PropertiesActions.addNewTenant(this.state);
      this.setState({folderName: '', key: '', value: ''})
      this.props.added(false);
      alert('added new property');
    }else{
      alert('please input value')
    }
  }

  render() {
    return (
      <div>
        <form>
          <div className="col-xs-12 col-md-2 col-lg-2 text-left">
            <input
              className="form-control"
              type="text"
              placeholder="af"
              onChange={e => this.setState({folderName: e.target.value})}
              required
            />
          </div>
          <div className="col-xs-12 col-md-3 col-lg-3 text-left">
            <input
              className="form-control"
              type="text"
              placeholder="quotationMark"
              onChange={e => this.setState({key: e.target.value})}
              required
            />
          </div>
          <div className="col-xs-12 col-md-3 col-lg-3 text-left">
            <input
              className="form-control"
              type="text"
              placeholder="?"
              onChange={e => this.setState({value: e.target.value})}
              required
            />
          </div>
          <div className="col-xs-12 col-md-2 col-lg-2 text-left">
            <button
              className="btn btn-success form-control glyphicon glyphicon-ok"
              type="submit"
              onClick={this.addAProperty}>
            </button>
          </div>
          <div className="col-xs-12 col-md-2 col-lg-2 text-left">

          <button
            className="btn btn-primary form-control glyphicon glyphicon-remove"
            onClick={() => this.props.added(false)}
            >
          </button>
          </div>
        </form>
      </div>
    )
  }
}
