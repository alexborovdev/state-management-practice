import Counter from '../features/counter/Counter.tsx'
import Users from '../features/users/Users.tsx'

const App = () => {
  return (
    <>
      <h1>RTK</h1>
      <div>
        <h2>Counter</h2>
        <Counter />
      </div>
      <div>
        <h2>Users</h2>
        <Users />
      </div>
    </>
  )
}

export default App