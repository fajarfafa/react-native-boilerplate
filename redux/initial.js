import { createReducer, createActions } from 'reduxsauce'
import API from '../services/api'

const { Types, Creators } = createActions({
  countIncrement: null,
  countDecrement: null,
  initialGet: ['config'],
})

export const InitialTypes = Types
export default Creators


const INITIAL_STATE = {
  count: 1,
  data: {}
}

const countIncrement = (state, action) => {
  return { ...state, count: state.count + 1 }
}

const countDecrement = (state, action) => {
  return { ...state, count: state.count - 1 }
}

const initialGet = (state, action) => {
  const { config } = action
  const  api = new API(config)
  return state
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNT_INCREMENT]: countIncrement,
  [Types.COUNT_DECREMENT]: countDecrement,
  [Types.INITIAL_GET]: initialGet,
})



