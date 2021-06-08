import { React, useEffect } from "react";

const List = ({ setCount, log }) => {
  // Run useEffect When a Prop Changes
  useEffect(() => {
    console.log("Props");
  }, [log]);

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
    </div>
  );
};

export default List;
