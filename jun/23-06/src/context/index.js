import React from "react";
import Data from "../data.json";

const Store = {
  data: Data,
  cart: [],
  print: (str) => console.log(str),
  bill: function () {
    return this.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  addToCart: (item) => Store.cart.push(item),
};

const StoreContext = React.createContext(Store);

export { Store, StoreContext };
