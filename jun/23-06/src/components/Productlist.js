import React, { useState, useContext } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  //   const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  //   const items = .map((item, i) => (
  //     <ProductItem key={i} info={item}  />
  //   ));

  return (
    <React.Fragment>
      <div>
        <button>Total bill</button>
        <h6>{totalBill}€</h6>
      </div>
      <ul>{"items"}</ul>
    </React.Fragment>
  );
};
export default ProductList;
