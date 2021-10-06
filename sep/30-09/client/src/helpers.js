const userLog = (auth) => {
  if (auth) {
    // logout
    localStorage.removeItem("token");
  } else {
    //login
  }
};

module.exports = { userLog };
