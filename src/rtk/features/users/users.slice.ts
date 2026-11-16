import { createSlice } from '@reduxjs/toolkit'
import type { UsersState } from './users.types.ts'
import { fetchUsers } from './users.thunks.ts'

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Failed to fetch users'
      })
  }
})

export default usersSlice.reducer