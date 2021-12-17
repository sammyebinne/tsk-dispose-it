import axios from "axios";
import RoutePage from "./Router";

axios.defaults.withCredentials = true;

function App() {
  return <RoutePage />;
}

export default App;
