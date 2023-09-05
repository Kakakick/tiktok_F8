
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

const initState = 0;

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  switch (action) {
    case DOWN_ACTION:
      return state - 1;
    case UP_ACTION:
      return state + 1;
    default:
      throw new Error('Invalid Action!');
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  console.log('render');

  return (
    <div style={{ padding: '10px 32px' }}>
      <h1>{count}</h1>
      <button
        onClick={() =>dispatch(UP_ACTION)}
      >
        Up
      </button>
      <button
        onClick={() =>dispatch(DOWN_ACTION)}
      >
        Down
      </button>
    </div>
  )
}

export default App;
