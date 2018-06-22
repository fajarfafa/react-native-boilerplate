import { createReducer, createActions } from 'reduxsauce'
import API, { resolveGetAction } from '../services/api'
import { objectMerge } from '../services/global'

const { Types, Creators } = createActions({
  countIncrement: null,
  countDecrement: null,
  initialGet: ['config'],
  initialGetSuccess: ['data', 'from']
})

export const InitialTypes = Types
export default Creators


const INITIAL_STATE = {
  count: 1,
  page: 1,
  total_pages: 0,
  total: 0,
  data: [],
  refresh: false,
  fetching: false
}

const countIncrement = (state) => {
  return { ...state, count: state.count + 1 }
}

const countDecrement = (state) => {
  return { ...state, count: state.count - 1 }
}

const initialGet = (state, action) => {
  const { config } = action
  return resolveGetAction(config, [
    { ...state, refresh: true },
    { ...state, fetching: true },
    { ...state, fetching: true }
  ])
}

const initialGetSuccess = (state, action) => {
  const { data, from } = action
  // return { ...state, ...data, data: objectMerge(state.data, data.data), refresh: false, fetching: false }
  return resolveGetAction(from, [
    { ...state, ...data, data: [...state.data, ...data.data], refresh: false, fetching: false },
    { ...state, ...data, data: [...state.data, ...data.data], fetching: false },
    { ...state, ...data, fetching: false },
  ])
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNT_INCREMENT]: countIncrement,
  [Types.COUNT_DECREMENT]: countDecrement,
  [Types.INITIAL_GET]: initialGet,
  [Types.INITIAL_GET_SUCCESS]: initialGetSuccess,
})



