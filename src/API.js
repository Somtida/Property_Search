import { get, post, ajax } from 'jquery'

import ServerActions from './actions/ServerActions'

const API = {
  getAllProperties(name) {
    console.log('name in API:', name);
    get(`/api/properties/${name}`)
      .done(response => { ServerActions.receiveProperties(response) })
  },
  deleteProperty(id) {
    
  }
}

export default API
