import React from "react";
// import { add } from "./helpers";
// import List from "./components/List";
import Data from "./data.json";

console.log(Data);
const users = Data.map((obj) => <h4 key={obj.id}>{obj.name}</h4>);
function App() {
  // function print() {
  //   return "Hey I am inner function";
  // }
  //const doSomething = () => 3 + 44 / 23;
  return (
    <React.Fragment>
      {
        //{doSomething()}
        //   <List print={print} />
        //   {add(22, 3)}
      }
      {users}
    </React.Fragment>
  );
}

export default App;
