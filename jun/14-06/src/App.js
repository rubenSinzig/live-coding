import React, { useState } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { WiAlien, WiNightAltThunderstorm } from "react-icons/wi";

//library.add(fab, faCheckSquare, faCoffee);
const App = () => {
  const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      {
        //<img src={`${process.env.PUBLIC_URL}/${data[0].img}`} alt="Sushi" />
        //<FontAwesomeIcon icon={["fab", "apple"]} size="6x" rotation={90} />
      }

      <h1>Welcome to our online store</h1>
      <h3>
        Lets go for a <FaBeer /> with <WiAlien /> when it's
        <WiNightAltThunderstorm />
      </h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList data={data} />
    </React.Fragment>
  );
};

export default App;
