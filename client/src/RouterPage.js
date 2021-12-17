import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import LandingPage from "./setup-pages/LandingPage";
import App from "./components/App";
import "./styles/old/App.css";

function RouterPage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {!isLoggedIn && <Route path="/" exact element={<LandingPage />} />}
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
