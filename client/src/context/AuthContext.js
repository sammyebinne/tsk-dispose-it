import axios from "axios";
import { useEffect, useState, createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    let response = await axios.get("/auth/loggedin");
    let data = await response.data;
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
