import { type ThunkAction } from 'redux-thunk'
import { incrementAC, incrementAsyncFinishAC, incrementAsyncStartAC } from './counter.actions.ts'
import type { RootState } from '../../app/store.ts'
import type { Action } from './counter.types.ts'

export const incrementAsync = (): ThunkAction<void, RootState, unknown, Action> =>
  (dispatch, getState) => {
    if (getState().counter.isLoading) {return}

    dispatch(incrementAsyncStartAC())
    setTimeout(() => {
      if (!getState().counter.isLoading) {return}

      dispatch(incrementAC())
      dispatch(incrementAsyncFinishAC())
    }, 2000)
  }