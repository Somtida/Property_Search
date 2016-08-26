import API from '../API'

const PropertiesActions = {
  getAllProperties(name) {
    console.log('name in PropertiesActions:', name);
    API.getAllProperties(name);
  },
  deleteProperty(id) {
    API.deleteProperty(id);
  }
}

export default PropertiesActions
