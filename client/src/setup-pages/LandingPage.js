import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/new/App.css";

function LandingPage() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div className="landing-page">
      {!login && !signup && (
        <div className="landing-page__content">
          <h1>Dispose It!</h1>
          <p className="landing-text">
            The one-stop shop for all your waste disposal inquiries.
            <br /> Partner with us to preserve our planet.
            <br /> Sign up to contribute to the Dispose it! guide and earn big
            rewards.
          </p>
          <div className="landing-btn">
            <button onClick={() => setSignup(true)}>Sign Up</button>
            <button onClick={() => setLogin(true)}>Log In</button>
          </div>
          <div className="landing-small">
            <small>Don't want to sign up? No problem!</small>
            <br />
            <small>
              You can still use our Dispose It! guide without an account.
            </small>
            <br />
            <small>
              Click <Link to={"/home"}>here</Link> to proceed.
            </small>
          </div>
        </div>
      )}
      <div className="access-forms">
        {login && <Login setLogin={setLogin} setSignup={setSignup} />}
        {signup && <Signup setLogin={setLogin} setSignup={setSignup} />}
      </div>
    </div>
  );
}

export default LandingPage;
