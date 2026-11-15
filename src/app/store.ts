import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { counterReducer } from '../features/counter/counter.reducer.ts'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = createStore(
  counterReducer,
  applyMiddleware(thunk)
)

export default store