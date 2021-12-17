import axios from "axios";
import RouterPage from "./RouterPage";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <RouterPage />
    </AuthContextProvider>
  );
}

export default App;
