import type { Action, CounterState } from './counter.types.ts'

const initialState: CounterState = { count: 0, step: 1, history: [], isLoading: false }

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
    case 'UNDO': {
      const lastElement = state.history.at(-1)

      if (!lastElement) {
        return state
      }

      return { ...state, count: lastElement.count, step: lastElement.step, history: state.history.slice(0, -1) }
    }
    case 'ASYNC_START': {
      return { ...state, isLoading: true }
    }
    case 'ASYNC_FINISH': {
      return { ...state, isLoading: false }
    }
    case 'RESET': {
      return initialState
    }

    default: {
      return state
    }
  }
}