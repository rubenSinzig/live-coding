import React, { useRef } from "react";

function App() {
  const userTextInput = useRef(null);
  const getMe = () => {
    console.log(userTextInput);
    userTextInput.current.focus();
  };
  const count = useRef(0);
  const changeBg = () => (userTextInput.current.style.backgroundColor = "red");
  return (
    <React.Fragment>
      <input type="text" ref={userTextInput} />
      <button onClick={getMe}>Get me focused</button>
      <button onClick={changeBg}>Change Bg</button>

      <button onClick={() => count.current++}>{count.current}</button>
      {console.log(count.current)}
    </React.Fragment>
  );
}

export default App;
