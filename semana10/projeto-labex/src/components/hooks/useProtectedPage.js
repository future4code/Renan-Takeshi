import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    token === null && history.replace("/login");
  }, [history]);
};

export default useProtectedPage;
