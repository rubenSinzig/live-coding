import { useContext } from "react";
import { StoreContext } from "../context";

const Cart = () => {
  // Not finished yet :)
  // This will be your task
  const contextObj = useContext(StoreContext);
  const items = contextObj.Store.cart.map((item) => (
    <h3>{item.productName}</h3>
  ));
  return <ul>{items}</ul>;
};

export default Cart;
