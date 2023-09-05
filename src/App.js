
import { useState, useReducer } from "react";
import Content from './Content';


// useState
// 1. init state: 0
// 2. action: up, down

// useReducer
// 1. init state: 0
// 2. action: up, down
// 3. Reducer
// 4. Dispatch

const init = ['Don vuon'];

const ADD_ACTION = 'add'
const REMOVE_ACTION = 'remove'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return [...state, action.item];
    case REMOVE_ACTION:
      return state.filter(item => item !== action.item);
    default:
      throw new Error('Invalid Action');
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, init);
  const [newToDo, setNewToDo] = useState('');

  const handleAddToDo = () => {
    setNewToDo('');
    document.querySelector('input').focus();
    return dispatch({
      type: ADD_ACTION,
      item: newToDo
    })
  }

  const handleRemoveToDo = (todo) => {
    setNewToDo('');
    document.querySelector('input').focus();
    return dispatch({
      type: REMOVE_ACTION,
      item: todo
    })
  }

  return (
    <div style={{ padding: '10px 32px' }}>
      <h1>To Do List</h1>
      <input
        placeholder="Enter todo..."
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button onClick={handleAddToDo}>Add</button>
      <ul>
        {
          todos.map((value, index) =>
            <li key={index}>
               {value} 
               <span onClick={() => handleRemoveToDo(value)}> &times; </span>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default App;
