import { type ThunkAction } from 'redux-thunk'
import { fetchUsersStartAC, fetchUsersSuccessAC, fetchUsersErrorAC } from './users.actions.ts'
import type { RootState } from '../../app/store.ts'
import type { Action } from './users.types.ts'
import { getUsers } from './users.api.ts'

export const fetchUsers = (): ThunkAction<Promise<void>, RootState, unknown, Action> => async (dispatch) => {
  dispatch(fetchUsersStartAC())

  try {
    const users = await getUsers()
    dispatch(fetchUsersSuccessAC(users))
  } catch (error) {
    const message = error instanceof Error
      ? error.message
      : 'Unknown error'

    dispatch(fetchUsersErrorAC(message))
  }
}