import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [loginMessage, setLoginMessage] = useState("");
  //axios.defaults.withCredentials = true;
  const [token, setTocken] = useState(
    `Bearer ${localStorage.getItem("token")}` || null
  );
  // This is not recommended;
  // if (token) {
  //   axios.interceptors.request.use(
  //     (config) => {
  //       config.headers.Authorization = `Bearer ${token}`;
  //       return config;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     }
  //   );
  // }
  const headers = token ? { Authorization: token } : {};
  useEffect(() => {
    axios
      .get("http://localhost:5000/checkAuth", { headers })
      .then((res) => {
        console.log(res);
        if (res.data.auth) {
          setLoginMessage(res.data.message);
          //
        } else {
          console.log(res.data.message);
          setLoginMessage(`You need to login ${res.data.message}`);
        }
      })
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <div>
      <h3>Welcome :) {loginMessage} </h3>
    </div>
  );
};
export default Home;
