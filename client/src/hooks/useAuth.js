import { useJwt } from "react-jwt";

const useAuth = () => {
  const { isExpired } = useJwt(localStorage.getItem("EMA_"));
  if (!isExpired) {
    return true;
  } else {
    localStorage.removeItem("EMA_");
    return false;
  }
};

export default useAuth;
