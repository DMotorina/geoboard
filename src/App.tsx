/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'

const testFunc = (bla: number) => {
  return String(bla)
}
 
const convertStringToBool = (bla: string): boolean => {
  return !!bla
}

console.log("Work!")

function App() {
  const [count, setCount] = useState(0)
  testFunc(15)
  convertStringToBool('15')

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
