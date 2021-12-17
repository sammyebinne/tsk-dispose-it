import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./setup-pages/LandingPage";
import App from "./components/App";

function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
