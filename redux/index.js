import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducer as initial } from './initial'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
export default () => {
  const rootReducer = combineReducers({
    initial
  })
  const sagaMiddleware = createSagaMiddleware()
  // mount it on the Store
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )

  // then run the saga
  sagaMiddleware.run(rootSaga)
  // return rootReducer
  return store
  // return createStore(rootReducer)
}
