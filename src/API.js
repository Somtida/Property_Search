import { get, post, ajax } from 'jquery'

import ServerActions from './actions/ServerActions'

const API = {
  getAllProperties(name) {
    console.log('name in API:', name);
    get(`/api/properties/${name}`)
      .done(response => { ServerActions.receiveProperties(response) })
  },
  deleteProperty(folderName,key) {
    console.log(folderName,key);
    get(`/api/properties/${folderName}/${key}`)
      .done(response => { ServerActions.deleteProperty(folderName) })

  },
  addNewTenant(object) {
    console.log('object in API:', object);
    post('/api/properties', object)
      .done(response => { ServerActions.addNewProperty() })
  },

}

export default API
