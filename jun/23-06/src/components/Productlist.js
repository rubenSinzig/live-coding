import React, { useState, useContext, useEffect } from "react";
import ProductItem from "./ProductItem";
import { StoreContext } from "../context";

const ProductList = () => {
  const contextObj = useContext(StoreContext);
  const [totalBill, setTotalBill] = useState(0);
  const [arr, setArr] = useState(contextObj.store.data);
  console.log(contextObj);
  useEffect(() => {
    setArr(
      contextObj.store.filteredData.length
        ? contextObj.store.filteredData
        : contextObj.store.data
    );
  }, [contextObj.store.filteredData, contextObj.store.data]);
  console.log(contextObj.store);
  const items = arr.map((item, i) => (
    <ProductItem key={i} info={item} contextObj={contextObj} />
  ));

  return (
    <React.Fragment>
      <div>
        <button onClick={() => setTotalBill(contextObj.store.bill())}>
          Total bill
        </button>
        <h6>{totalBill}€</h6>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
