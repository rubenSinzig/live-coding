import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  function changeHandel(e) {
    console.log(e.target.value);
    setUserInput(e.target.value.trim());
  }
  function add(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={add}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandel}
          placeholder="type something"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default App;
