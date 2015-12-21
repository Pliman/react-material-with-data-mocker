import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './counter'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./counter', () => {
      const nextReducer = require('./counter')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}