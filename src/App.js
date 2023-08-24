
import { useState } from "react";

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]

function App() {

  const [gift, setGift] = useState();

  const handleGift = () => (
    setGift(() => {
      return gifts[Math.floor(Math.random() * gifts.length)];
    })
  )

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>
        {gift || 'You do not have a gift'}
      </h1>
      <button onClick={handleGift}>
        Get Gift
      </button>
    </div>
  );
}

export default App;
