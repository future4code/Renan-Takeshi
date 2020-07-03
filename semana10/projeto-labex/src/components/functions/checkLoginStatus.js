const checkLoginStatus = () => {
  return Boolean(localStorage.getItem("token"));
};

export default checkLoginStatus
