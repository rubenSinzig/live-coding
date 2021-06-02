import React, { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Data from "./data.json";

function App() {
  // const [posts, setPosts] = useState(Data);

  return (
    <React.Fragment>
      {
        // <Gallery posts={posts} />
      }
      <Gallery Data={Data} />
    </React.Fragment>
  );
}

export default App;
