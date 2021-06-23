import { useState } from "react";
import Home from "./components/home/Home.js";

function App() {
  const arr = [
    "https://images.ctfassets.net/x7j9qwvpvr5s/3RbrUClSBVlcoox73k4uQM/726ef0e39f1c272f6220d0c525c7b246/Panigale-V4-S-MY20-Red-Ambience-07-Gallery-1920x1080.jpg",
    "https://images.ctfassets.net/x7j9qwvpvr5s/3pDCcWB2PXHdzHoZuGR1fz/521c7fc5921513a056bb017199e99ffc/Panigale-V4-S-MY20-Red-Ambience-13-Gallery-1920x1080.jpg",
    "https://images.ctfassets.net/x7j9qwvpvr5s/H8HBHAw7btU8wbbBooHYC/17ca4d7480f3a90df554ef9a876505c9/Panigale-V4-S-MY20-Red-Ambience-05-Gallery-1920x1080.jpg",
  ];
  const [val, setVal] = useState(0);
  return (
    <div className="slider">
      <button onClick={() => setVal(val + 1)} disabled={arr.length - 1 == val}>
        ⬅
      </button>
      <Home item={arr[val]} />
      <button onClick={() => setVal(val - 1)} disabled={val == 0}>
        ➡
      </button>
    </div>
  );
}

export default App;
