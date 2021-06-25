import React, { useState, useContext } from "react";
import { StoreContext } from "../context";

const LookUp = () => {
  const [userInput, setUserInput] = useState("");
  const contextObj = useContext(StoreContext);
  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userText = userInput.toLocaleLowerCase().trim();
    contextObj.setStore((prevState) => {
      return { ...prevState, filteredData: contextObj.store.lookFor(userText) };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeHandle} value={userInput} />
      <input type="submit" value="filter" />
    </form>
  );
};
export default LookUp;
