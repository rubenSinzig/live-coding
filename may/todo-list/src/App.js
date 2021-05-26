import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  function increment() {
    setClicks((prevState) => prevState + 1);
  }
  return (
    <div>
      You click {clicks} times!
      <br />
      <button onClick={increment}>Click me 😎</button>
    </div>
  );
}

export default App;
