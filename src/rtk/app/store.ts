import { configureStore } from '@reduxjs/toolkit'
import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter.slice.ts'
import { usersReducer } from '../features/users/users.reducer.ts'

export type AppThunk<ReturnType = void> =
  ThunkAction<ReturnType, RootState, unknown, UnknownAction>

const store = configureStore({
    reducer: {
      counter: counterReducer,
      users: usersReducer
    }
  }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store