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
      }
    });
  }

  getAllProperties() {
    return _properties;
  }

  deleteProperty(id) {
    console.log('id:',id);
    _properties = _properties.filter((property) => property.id !== id);
    this.emit('CHANGE');
    // return _properties;
    // console.log(_properties.find((property) => property.id === id));
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new PropertyStore();
