import React from "react";
import Data from "../data.json";

const Store = {
  data: Data,
  cart: [],
  filteredData: [],
  lookFor: (text) => {
    return Store.data.filter((item) => item.productName.includes(text));
  },
  print: () => console.log(Store),
  bill: function () {
    return this.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
};

const StoreContext = React.createContext(Store);

export { Store, StoreContext };
