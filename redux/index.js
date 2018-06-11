import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducer as initial } from './initial'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
export default () => {
  const rootReducer = combineReducers({
    initial
  })
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)
  return store
}
