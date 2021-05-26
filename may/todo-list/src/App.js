import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value.trim());
  }
  function handleSubmit(e) {
    e.preventDefault();
    // more code
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="userInput"
          type="text"
          value={userInput}
          onChange={handleChange}
        />
        <input type="text" />
        <input type="submit" value="Add" />
      </form>
      {userInput}
      <h2>{userInput}</h2>
    </div>
  );
}

export default App;
