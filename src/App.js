
import { useState } from "react";


function App() {
  const [act, setAct] = useState('');
  const [acts, setActs] = useState(() => {
    return JSON.parse(localStorage.getItem('jobs')) ?? [];
  });

  const addToDo = () => {
    setActs(prev => {
      const jobs = [...prev, act];

      localStorage.setItem('jobs', JSON.stringify(jobs));

      return jobs;
    });
    setAct('');
  }

  const removeAct = (index) => {
    setActs(prev => {
      let jobs = prev.filter((a, i) => i !== index);

      localStorage.setItem('jobs', JSON.stringify(jobs));

      return jobs;
    })
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
