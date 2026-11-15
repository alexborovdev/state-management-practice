import { increment, asyncStart, asyncFinish } from './counter.slice.ts'
import type { AppThunk } from '../../app/store.ts'

export const incrementAsync = (): AppThunk =>
  (dispatch, getState) => {
    if (getState().counter.isLoading) {return}

    dispatch(asyncStart())
    setTimeout(() => {
      if (!getState().counter.isLoading) {return}

      dispatch(increment())
      dispatch(asyncFinish())
    }, 2000)
  }