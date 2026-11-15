import type { User } from './users.types.ts'

export const fetchUsersStartAC = () => ({ type: 'FETCH_USERS_START' as const })
export const fetchUsersSuccessAC = (payload: User[]) => ({ type: 'FETCH_USERS_SUCCESS' as const, payload })
export const fetchUsersErrorAC = (payload: string) => ({ type: 'FETCH_USERS_ERROR' as const, payload })