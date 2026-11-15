import {
  type fetchUsersStartAC,
  type fetchUsersSuccessAC,
  type fetchUsersErrorAC
} from './users.actions.ts'

export type User = {
  id: number,
  name: string,
  username: string,
  email: string
}

export type UsersState = {
  users: User[]
  isLoading: boolean
  error: string | null
}

export type Action =
  | ReturnType<typeof fetchUsersStartAC>
  | ReturnType<typeof fetchUsersSuccessAC>
  | ReturnType<typeof fetchUsersErrorAC>