
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


let clicked = false;
function App() {

  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleCheck = (id) => {
    setChecked(checked => {
      if (checked.includes(id)) {
        return checked.filter(num => num !== id);
      }
      else return [...checked, id];
    })
  }

  const handleSubmit = () => {
      console.log({ ids: checked })
  }

  return (
    <div className="App" style={{ padding: '35px' }}>
      {
        courses.map((value) => {
          return (
            <div key={value.id}>
              <input
                type="checkbox"
                checked={checked.includes(value.id)}
                onChange={() => handleCheck(value.id)}
              />
              {value.name}
            </div>
          )
        })
      }
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
