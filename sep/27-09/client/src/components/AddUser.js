import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  // M1
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  // M2
  //   const [newUser, setNewUser] = useState({
  //     username: "",
  //     password: "",
  //     confPassword: "",
  //   });

  //   const handleChange = (e) => {
  //     const value = e.target.value;
  //     const name = e.target.name;
  //     setNewUser({ ...newUser, [name]: value });
  //   };
  const handleUpload = (e) => {
    setAvatar(e.target.files[0]);
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("confPassword", confPassword);
    //     data.append("username", newUser.username);
    //     data.append("password", newUser.password);
    //     data.append("confPassword", newUser.confPassword);
    data.append("avatar", avatar);

    // axios post /register
    try {
      const result = await axios.post("/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h4>New User</h4>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="username"
          id="1"
          placeholder="Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // onChange={handleChange}
          //   value={newUser.username}
        />
        <input
          type="password"
          name="password"
          id="2"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handleChange}
          //   value={newUser.password}
        />
        <input
          type="password"
          name="confPassword"
          id="3"
          placeholder="Repeat your pass"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          // onChange={handleChange}
          //   value={newUser.confPassword}
        />
        <input type="file" name="avatar" id="" onChange={handleUpload} />
        <input type="submit" value="Add user" />
        <input type="reset" value="Clear" />
      </form>
    </div>
  );
};

export default AddUser;
