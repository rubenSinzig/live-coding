import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("http://localhost:5000/users", {
      method: "GET",
      credentials: "include",
    })
      .then((data) => data.json())
      .then((result) => setUsers(result));
  };
  console.log(users);
  const usersItem = users.map((user, i) => <li key={i}> {user}</li>);
  return (
    <div className="App">
      <ul>{usersItem}</ul>
    </div>
  );
}

export default App;
