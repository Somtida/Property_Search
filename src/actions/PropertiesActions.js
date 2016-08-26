import API from '../API'

const PropertiesActions = {
  getAllProperties(name) {
    console.log('name in PropertiesActions:', name);
    API.getAllProperties(name);
  },
  deleteProperty(name,key) {
    console.log(name,key);
    API.deleteProperty(name,key)
  },
  addNewTenant(object) {
    console.log(object);
    API.addNewTenant(object)
  },
}

export default PropertiesActions
