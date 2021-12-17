import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { TextField, Typography, Button, FormControl } from "@mui/material";
import AuthContext from "../context/AuthContext";

function Signup({ setLogin, setSignup }) {
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  async function signup(data) {
    try {
      const response = await axios.post("/auth/signup", data);
      console.log(response.data.message);
      if (response.data.message === "User created")
        setResponse("Account created successfully");
      setTimeout(() => {
        setLoggedIn();
        navigate("/home");
        setResponse("");
      }, 1500);
    } catch (error) {
      console.log(error.response.data.message);
      if (
        error.response.data.message ===
        "An account with this email already exists"
      )
        setError("An account with this email already exists. Please login.");
    }
  }

  const goToLogin = () => {
    setLogin(true);
    setSignup(false);
    setError("");
  };

  const back = () => {
    setLogin(false);
    setSignup(false);
    setError("");
  };

  return (
    <div className="setup-forms">
      <div className="wrapper">
        <div className="form-container">
          {/* alert user of successful login */}
          {response && (
            <div className="alert-success">
              <Typography variant="h6">{response}</Typography>
            </div>
          )}

          {!response && (
            <div className="App__form">
              <form onSubmit={handleSubmit(signup)}>
                {error && (
                  <div>
                    <Typography variant="body1" gutterBottom>
                      {error}
                    </Typography>
                    <Button className="btns" onClick={goToLogin}>
                      Login
                    </Button>
                  </div>
                )}
                {!error && (
                  <Typography variant="h5" gutterBottom>
                    SIGN UP
                  </Typography>
                )}
                {!error && (
                  <FormControl>
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      // fullWidth
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters long",
                        },
                      })}
                      error={Boolean(errors.name)}
                      helperText={errors.name?.message}
                    />
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      // fullWidth
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                    <TextField
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long",
                        },
                      })}
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}
                    />
                    <TextField
                      name="passwordVerify"
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      {...register("passwordVerify", {
                        required: "This is required",
                        validate: (value) =>
                          value === passwordRef.current ||
                          "Passwords do not match",
                      })}
                      error={Boolean(errors.passwordVerify)}
                      helperText={errors.passwordVerify?.message}
                    />
                  </FormControl>
                )}
                <div className="clearfix"></div>
                {!error && (
                  <Button className="btns" type="submit">
                    Submit
                  </Button>
                )}
                <Button className="btns" onClick={back}>
                  Back
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
