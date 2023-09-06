
import Content from './Content';
import './App.css'
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'

function App() {
  const value = useContext(ThemeContext)
  return (
    <div style={{ padding: '10px 32px' }}>
      <button onClick={value.toggleTheme}>Tonggle theme</button>
      <Content />
    </div>
  )
}

export default App;
