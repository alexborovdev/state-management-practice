import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from './users.api.ts'

export const fetchUsers = createAsyncThunk('users/fetchUsers', getUsers)