import { legacy_createStore as createStore, combineReducers, applyMiddleware, type Reducer } from 'redux'
import { thunk } from 'redux-thunk'
import { counterReducer } from '../features/counter/counter.reducer.ts'
import { usersReducer } from '../features/users/users.reducer.ts'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer
})

const store = createStore(
  rootReducer as unknown as Reducer<
    ReturnType<typeof rootReducer>,
    any
  >,
  applyMiddleware(thunk)
)

export default store