import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  countIncrement: null,
  countDecrement: null,
})

export const InitialTypes = Types
export default Creators


const INITIAL_STATE = {
  count: 1
}

const countIncrement = (state, action) => {
  return { ...state, count: state.count + 1 }
}

const countDecrement = (state, action) => {
  return { ...state, count: state.count - 1 }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNT_INCREMENT]: countIncrement,
  [Types.COUNT_DECREMENT]: countDecrement,
})



