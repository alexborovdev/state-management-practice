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