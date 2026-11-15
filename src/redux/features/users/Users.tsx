import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { fetchUsers } from './users.thunks.ts'

const Users = () => {
  const users = useAppSelector(state => state.users.users)
  const isLoading = useAppSelector(state => state.users.isLoading)
  const error = useAppSelector(state => state.users.error)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const onLoadUsersButtonClick = () => {
    dispatch(fetchUsers())
  }

  return (
    <>
      <button
        type="button"
        disabled={isLoading}
        onClick={onLoadUsersButtonClick}
      >
        {isLoading ? 'Loading...' : 'Load users'}
      </button>
      {error && <div>{error}</div>}
      {
        users.length > 0 &&
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.username}</p>
                <p>{user.email}</p>
              </li>
            )
          })}
        </ul>
      }
    </>
  )
}

export default Users