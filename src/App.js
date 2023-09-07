import { useStore } from './store'

function App() {
  const [state, dispatch] = useStore();

  return (
    <div style={{ padding: '10px 32px' }}>
      <h1>Hello anh em F8, Đây là ToDo List</h1>
      <input
        value={state.todoInput}
      />
      <button>Add</button>
      <ul>
        {
          state.todo.map((value, index) => (
            <li key={index}> {value} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
