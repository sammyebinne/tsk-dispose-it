import "./styles/new/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./__components/Home";
import LandingPage from "./__components/setup-pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" eexact element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <div className="app-container">
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
