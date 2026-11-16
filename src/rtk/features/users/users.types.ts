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