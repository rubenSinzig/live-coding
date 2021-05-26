import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  function increment() {
    setClicks(clicks + 1);
  }
  function decrement() {
    setClicks((prevState) => prevState - 1);
  }
  return (
    <div>
      You click {clicks} times!
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
