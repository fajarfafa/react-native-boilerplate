import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducer as initial } from './inital'

export default () => {
  const rootReducer = combineReducers({
    initial
  })
  // const sagaMiddleware = createSagaMiddleware()
  // // mount it on the Store
  // const store = createStore(
  //   rootReducer,
  //   applyMiddleware(sagaMiddleware)
  // )

  // then run the saga
  // sagaMiddleware.run(rootSaga)
  // return rootReducer
  // return createStore(rootReducer, rootSaga)
  // return store
  return createStore(rootReducer)
}
