import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveProperties(properties) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_PROPERTIES',
      properties,
    });
  },

  receiveTenants(tenants) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_TENANTS',
      tenants,
    });
  },
  receiveOneTenant(tenant) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_ONE_TENANT',
      tenant,
    })
  },
}

export default ServerActions
