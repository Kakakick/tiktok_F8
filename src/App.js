
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'NodeJS'
  }
]

function App() {

  const [act, setAct] = useState('');
  const [acts, setActs] = useState([]);


  const addToDo = () => {
    setActs(prev => [...prev, act]);
    setAct('');
  }


  const removeAct = (index) => {
    setActs(prev => prev.filter((a, i) => i !== index));

  }

  return (
    <div className="App" style={{ padding: '35px' }}>
      <input
        value={act}
        onChange={(a) => setAct(a.target.value)}
      />
      <button onClick={addToDo}>Add</button>

      <ul>
        {
          acts.map((value, index) => (
            <li key={index}>
              {value}
              <button onClick={() => removeAct(index)}>Remove</button>
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
