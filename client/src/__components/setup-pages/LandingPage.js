import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function LandingPage() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div className="landing-page">
      {!login && !signup && (
        <div className="landing-page__content">
          <h1>Dispose It!</h1>
          <p>
            Your one-stop shop for all your waste disposal enquiries.
            <br /> Partner with us to preserve our planet.
            <br /> Earn valuable points by contributing to our Dispose it!
            guide.
          </p>
          <div className="landing-btn">
            <button onClick={() => setSignup(true)}>Sign Up</button>
            <button onClick={() => setLogin(true)}>Log In</button>
          </div>
        </div>
      )}
      <div className="access-forms">
        {login && <Login />}
        {signup && <Signup />}
      </div>
    </div>
  );
}

export default LandingPage;
