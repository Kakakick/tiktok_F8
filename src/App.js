
import { useState } from "react";


function App() {

  const [info, setInfo] = useState({
    name: 'Tuan Anh',
    age: 19,
    marriage: false
  })

  const handleUpdate = () => {
    setInfo(() => {
      Object.keys(info).map((obj, index) => {
        if (info[obj] === false) {
          info[obj] = 'false';
        }
        return 0;
      });
      
      return ({
        ...info,
        bio: 'From Thanh Hoa'
      })
    })
  }

  function Component() {
    return (
      <div> {
        Object.keys(info).map((obj, index) => (
            <p key={index}>
              {obj} : {info[obj]}
            </p>
          )
        )}
      </div>
    )
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>
        <Component />
      </h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
