import "./App.css"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    return setCount((prevState) => prevState + 1)
  }

  const decrementCount = () => {
    return setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrementment</button>
    </div>
  )
}

export default App
