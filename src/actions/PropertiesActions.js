import API from '../API'

const PropertiesActions = {
  getAllProperties(name) {
    API.getAllProperties(name);
  },
  deleteProperty(name,key) {
    API.deleteProperty(name,key)
  },
  addNewTenant(object) {
    API.addNewTenant(object)
  },
}

export default PropertiesActions
