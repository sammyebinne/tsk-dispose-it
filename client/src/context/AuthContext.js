import axios from "axios";
import { useEffect, useState, createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  async function setLoggedIn() {
    let response = await axios.get("/auth/loggedin");
    let data = await response.data;
    setIsLoggedIn(data);
  }

  useEffect(() => {
    setLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
