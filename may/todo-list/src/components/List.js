import { useState } from "react";

const List = (props) => {
  //   console.log(props);
  //   console.log(props.setList);
  const [userInput, setUserInput] = useState("");
  function changeHandle(e) {
    // console.log(e.target.value);
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    // trim
    props.setList((prevState) => [
      ...prevState,
      { id: prevState.length, title: userInput.trim(), done: false },
    ]);
    setUserInput("");
  }
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={userInput} onChange={changeHandle} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default List;
