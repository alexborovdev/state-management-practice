import type {
  incrementAC,
  decrementAC,
  setStepAC,
  undoAC,
  resetAC,
} from './counter.actions.ts'

type History = {
  count: number
  step: number
}

export type CounterState = {
  count: number
  step: number
  history: History[]
}

export type Action =
  | ReturnType<typeof incrementAC>
  | ReturnType<typeof decrementAC>
  | ReturnType<typeof setStepAC>
  | ReturnType<typeof undoAC>
  | ReturnType<typeof resetAC>