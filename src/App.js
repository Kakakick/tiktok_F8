
import { useState, memo } from "react";
import Content from './Content';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(pre => pre + 1);
  }
  const [count2, setCount2] = useState(0);

  const increase2 = () => {
    setCount2(pre => pre + 1);
  }

  return (
    <div style={{ padding: '50px' }}>
      <Content
        count={count}
      />
      <h1 >{count}</h1>
      <h1 >{count2}</h1>
      <button onClick={increase}>Click me!</button>    
      <button onClick={increase2}>Click me 2!</button>
    </div>
  )
}

export default App;
