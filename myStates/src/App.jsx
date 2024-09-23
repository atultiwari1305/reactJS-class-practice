import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Count is {count}</p><br></br>
        <button onClick={() => setCount((count) => count + 1)}>Add</button><br></br>
        <button onClick={() => setCount((count) => count - 1)}>Sub</button><br></br>
        <button onClick={() => setCount((count) => 0)}>Reset</button>
      </div>
    </>
  )
}

export default App
