import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveProperties(properties) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_PROPERTIES',
      properties,
    });
  },

  deleteProperty(name) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_PROPERTY',
      name,
    });
  },
  addNewProperty(){
    AppDispatcher.dispatch({
      actionType: 'ADD_PROPERTY',
    });
  },
}

export default ServerActions
