// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const getData = () => {
//     fetch("/users")
//       // http://localhost:5000/users
//       .then((result) => result.json())
//       .then((data) => setUsers(data));
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   console.log(users);
//   const usersLi = users.map((user, i) => <li key={i}>{user}</li>);
//   return <div className="App">{usersLi}</div>;
// }

// export default App;

import { useEffect, useState } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./sass/main.scss";
import AddUser from "./components/AddUser";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setUsers(JSON.parse(localStorage.getItem("data")));
    } else {
      setUsers([]);
    }
  }, []);

  const deleteData = () => {
    localStorage.clear();
    setUsers([]);
    //localStorage.removeItem("data")
  };
  const getData = () => {
    fetch("/users")
      // http://localhost:5000/users
      .then((result) => result.json())
      .then((data) => {
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("dataDate", Date.now());
        setUsers(data);
      });
  };
  const usersItems = users.map((user) => (
    <li key={user._id}>
      {user.username}
      <img src={`http://localhost:5000/${user.avatar}`} alt={user.name} />
    </li>
  ));

  return (
    <div className="App">
      <h4>Users</h4>
      <button onClick={getData}>{users.length ? "Update" : "Get Data"}</button>
      <button onClick={deleteData}>Delete</button>
      {usersItems}
      <AddUser />
    </div>
  );
};

export default App;
