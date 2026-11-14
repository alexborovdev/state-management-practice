import type {
  incrementAC,
  decrementAC,
  setStepAC,
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
  | ReturnType<typeof resetAC>