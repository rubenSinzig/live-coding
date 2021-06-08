import { Fragment } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState(false);

  // // Stop useEffect from running on every render
  // useEffect(() => {
  //   if (!count && count) {
  //     console.log("I am Ready");
  //   }
  // }, [count]);

  // // Only Run Once, on Mount
  // useEffect(() => {
  //   console.log("I am Ready");
  // }, []);

  // Run useEffect on State Change
  useEffect(() => {
    if (count) {
      console.log("I am Ready");
    }
  }, [count]);

  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>+</button>
      <List setCount={setCount} setLog={setLog} />
      <h3>{count}</h3>
    </React.Fragment>
  );
}

export default App;
