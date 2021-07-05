import { useState } from "react";
import { Store, StoreContext } from "./context";

import ProductList from "./components/Productlist";
import LookUp from "./components/LookUp";
//import Cart from "./components/Cart";
function App() {
  // Method number one: you add more keys to the passed object, here I added a state
  //const [filteredData, setFilteredData] = useState([]);
  //  <StoreContext.Provider value={{ Store, filteredData, setFilteredData }}>

  // Method number two: you add your Store to a state, so you get the Benefit of the functionality to update your state in this case Store
  const [store, setStore] = useState(Store);
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      <h1>Online Store</h1>
      <LookUp />

      <ProductList />
    </StoreContext.Provider>
  );
}

export default App;
