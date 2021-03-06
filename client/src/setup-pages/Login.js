import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { TextField, Typography, Button, FormControl } from "@mui/material";
import AuthContext from "../context/AuthContext";

function Login({ setLogin, setSignup }) {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/auth/login", data);
      if (response.data.message === "User logged in")
        setResponse("Logged in successfully");
      setTimeout(() => {
        setLoggedIn();
        navigate("/home");
        setResponse("");
      }, 1500);
    } catch (error) {
      if (
        error.response.data.message ===
        "Please enter correct email and password"
      ) {
        setError("apiError", {
          message: "Please enter correct email and password",
        });
      }
    }
  };

  const back = () => {
    setLogin(false);
    setSignup(false);
  };

  return (
    <div className="setup-forms">
      <div className="wrapper">
        <div className="form-container">
          {response && (
            <Typography variant="h6" className="response">
              {response}
            </Typography>
          )}
          {!response && (
            <div className="App__form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h5" gutterBottom>
                  LOG IN
                </Typography>
                <FormControl>
                  <TextField
                    id="outlined-basic"
                    name="email"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setError("apiError", null)}
                    // fullWidth
                    {...register("email", {
                      required: "Email is required",
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                  />
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setError("apiError", null)}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                  />
                  {errors.apiError && (
                    <div className="alert alert-danger mt-3 mb-0">
                      {errors.apiError?.message}
                    </div>
                  )}
                </FormControl>
                <Button className="btns" type="submit">
                  Submit
                </Button>
                {/* return to landing page */}
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

export default Login;
