import { call, put } from 'redux-saga/effects'
import { api } from '../services/api'
import InitialActions from '../redux/initial';
export function* initialWorker(action) {
  try {
    const result = yield call(api().listUser)
    yield put(InitialActions.initialGetSuccess(result))
    console.log(result, 'wokrer')
  } catch (e) {
    console.error(e)
  }
}