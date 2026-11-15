import { type ThunkAction } from 'redux-thunk'
import { incrementAC } from './counter.actions.ts'
import type { RootState } from '../../app/store.ts'
import type { Action } from './counter.types.ts'

export const incrementAsync = (): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAC())
    }, 2000)
  }