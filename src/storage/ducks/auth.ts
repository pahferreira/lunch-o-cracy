import { TState } from '../../types/auth'
import { TAction } from '../../types/storage'

// ACTION TYPES
export const Types = {}

// INITIAL STATE
const initialState: TState = {
  user: {}
}

// REDUCER
export default (state: TState = initialState, action: TAction): TState => {
  switch (action.type) {
    default:
      return state
  }
}
