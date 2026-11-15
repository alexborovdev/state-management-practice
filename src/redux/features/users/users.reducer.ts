import type { Action, UsersState } from './users.types.ts'

const initialState: UsersState = { users: [], isLoading: false, error: null }

export const usersReducer = (state: UsersState = initialState, action: Action): UsersState => {
  switch (action.type) {
    case 'FETCH_USERS_START': {
      return { ...state, isLoading: true, error: null }
    }
    case 'FETCH_USERS_SUCCESS': {
      return { ...state, users: action.payload, isLoading: false }
    }
    case 'FETCH_USERS_ERROR': {
      return { ...state, error: action.payload, isLoading: false }
    }
    default: {
      return state
    }
  }
}