import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const getData = () => {
    fetch("/users")
      // http://localhost:5000/users
      .then((result) => result.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(users);
  const usersLi = users.map((user, i) => <li key={i}>{user}</li>);
  return <div className="App">{usersLi}</div>;
}

export default App;
