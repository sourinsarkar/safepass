import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => {
        {/* <button onClick={() => { */}
          const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_";
          let newPassword = '';
          for(let i = 0; i <= 16; i++) {
            newPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
          }
          // console.log(newPassword);
          return newPassword;
        })}>
          {/* count is {count} */}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
