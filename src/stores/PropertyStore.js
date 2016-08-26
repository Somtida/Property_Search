import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _properties = [];

class PropertyStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_PROPERTIES':
          _properties = action.properties;
          this.emit('CHANGE');
          break;
        case 'DELETE_PROPERTY':
          _properties = _properties.filter((property) => property.name !== action.name);
          this.emit('CHANGE');
          break;
        case 'ADD_PROPERTY':
          this.emit('CHANGE');
          break;

      }
    });
  }

  getAllProperties() {
    return _properties;
  }


  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new PropertyStore();
