import {
  type incrementAC,
  type decrementAC,
  type setStepAC,
  type undoAC,
  type resetAC,
  type incrementAsyncStartAC,
  type incrementAsyncFinishAC
} from './counter.actions.ts'

type History = {
  count: number
  step: number
}

export type CounterState = {
  count: number
  step: number
  history: History[]
  isLoading: boolean
}

export type Action =
  | ReturnType<typeof incrementAC>
  | ReturnType<typeof decrementAC>
  | ReturnType<typeof setStepAC>
  | ReturnType<typeof undoAC>
  | ReturnType<typeof incrementAsyncStartAC>
  | ReturnType<typeof incrementAsyncFinishAC>
  | ReturnType<typeof resetAC>