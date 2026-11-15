import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CounterState } from './counter.types.ts'

const initialState: CounterState = {
  count: 0,
  step: 1,
  history: [],
  isLoading: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.history.push({
        count: state.count,
        step: state.step
      })
      state.count += state.step
    },
    decrement (state) {
      state.history.push({
        count: state.count,
        step: state.step
      })
      state.count -= state.step
    },
    setStep (state, action: PayloadAction<number>) {
      if (
        !Number.isSafeInteger(action.payload) ||
        action.payload <= 0 ||
        action.payload === state.step
      ) {
        return
      }

      state.history.push({
        count: state.count,
        step: state.step
      })
      state.step = action.payload
    },
    undo (state) {
      const previousState = state.history.pop()

      if (!previousState) {
        return
      }

      state.count = previousState.count
      state.step = previousState.step
    }
  }
})

export const { increment, decrement, setStep, undo } = counterSlice.actions
export default counterSlice.reducer