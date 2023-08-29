
import { useState, useCallback } from "react";
import Content from './Content';

// 1. memo() -> higher Order Component (HOC)
// 2. useCallback 
//    - Reference types
//    - React memo()

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount(pre => pre + 1);
  }, [])

  return (
    <div style={{ padding: '50px' }}>
      <Content
        onIncrease={handleIncrease}
      />
      <h1 >{count}</h1>
    </div>
  )
}

export default App;
