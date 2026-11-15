import counterReducer from '../features/counter/counter.slice.ts'
import { usersReducer } from '../features/users/users.reducer.ts'
import { configureStore } from '@reduxjs/toolkit'

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