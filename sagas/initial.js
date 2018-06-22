import { call, put } from 'redux-saga/effects'
import { api, resolveGetAction } from '../services/api'
import InitialActions from '../redux/initial'
export function* initialWorker(action) {
  let result
  let { config } = action
  try {
    let result = yield call(api().listUser, config)
    yield put(InitialActions.initialGetSuccess(result.data, config))
  } catch (e) {
    console.error(e)
  }
}