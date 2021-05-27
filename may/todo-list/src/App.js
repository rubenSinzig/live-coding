//import React, { useState, Fragment } from "react";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDos from "./components/ToDos";
function App() {
  const [list, setList] = useState([]);
  const remove = (itemToRemove) => {
    // itemToRemove has the id for that specific item
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList(newArr);
  };
  const check = (itemToCheck) => {
    // itemToCheck has the id for that specific item
    console.log(itemToCheck);
    list.filter((item) => {
      if (item.id === itemToCheck) {
        // revers done
        item.done = !item.done;
      }
      return item;
    });
    console.log(list);
  };
  // React Fragments allow you to wrap multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.
  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <ToDos list={list} remove={remove} check={check} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
