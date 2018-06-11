import { createReducer, createActions } from 'reduxsauce'
import API from '../services/api'

const { Types, Creators } = createActions({
  countIncrement: null,
  countDecrement: null,
  initialGet: ['config'],
  initialGetSuccess: ['data']
})

export const InitialTypes = Types
export default Creators


const INITIAL_STATE = {
  count: 1,
  data: {}
}

const countIncrement = (state) => {
  return { ...state, count: state.count + 1 }
}

const countDecrement = (state) => {
  return { ...state, count: state.count - 1 }
}

const initialGet = (state, action) => {
  const { config } = action
  return state
}

const initialGetSuccess = (state, action) => {
  const { data } = action
  return { ...state, data: data.data }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNT_INCREMENT]: countIncrement,
  [Types.COUNT_DECREMENT]: countDecrement,
  [Types.INITIAL_GET]: initialGet,
  [Types.INITIAL_GET_SUCCESS]: initialGetSuccess,
})



