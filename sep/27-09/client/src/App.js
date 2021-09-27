import { useState, useEffect } from "react";
//import AddForm from './'

function App() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("/users")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getData();
  }, []);
  const userArr = users.map((user, i) => <li key={i}>{user}</li>);
  console.log(users);
  return (
    <div className="App">
      <ul>{userArr}</ul>
    </div>
  );
}

export default App;
