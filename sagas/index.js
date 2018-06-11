import { takeLatest, call, put } from 'redux-saga/effects'
import { InitialTypes } from '../redux/initial'
import { initialWorker } from './initial'
export default function* root() {
  try {
    yield takeLatest(InitialTypes.INITIAL_GET, initialWorker)
  } catch (e) {
    console.error(e)
  }
}