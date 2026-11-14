import type { Action, CounterState } from './counter.types.ts'

const initialState: CounterState = { count: 0, step: 1, history: [] }

export const counterReducer = (state: CounterState = initialState, action: Action): CounterState => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, count: state.count + state.step, history: [...state.history, { count: state.count, step: state.step }] }
    }
    case 'DECREMENT': {
      return { ...state, count: state.count - state.step, history: [...state.history, { count: state.count, step: state.step }] }
    }
    case 'SET_STEP': {
      if (
        !Number.isSafeInteger(action.payload) ||
        action.payload <= 0 ||
        action.payload === state.step
      ) {
        return state
      }

      return { ...state, history: [...state.history, { count: state.count, step: state.step }], step: action.payload }
    }
    case 'RESET': {
      return initialState
    }

    default: {
      return state
    }
  }
}