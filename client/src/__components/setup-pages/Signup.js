import { useForm } from "react-hook-form";
import { useRef } from "react";
import {
  TextField,
  Typography,
  Button,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
  };

  return (
    // <div className="setup-forms" >
    //   <div className="wrapper">
    //     <div className="form-container">
    //       <div className="App__form">
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //           <Typography variant="h4" gutterBottom>
    //             Sign up
    //           </Typography>
    //           <FormControl>
    //             <TextField
    //               id="outlined-basic"
    //               name="email"
    //               label="Email"
    //               variant="outlined"
    //               // fullWidth
    //               {...register("email", {
    //                 required: "Email is required",
    //               })}
    //               error={Boolean(errors.email)}
    //               helperText={errors.email?.message}
    //             />
    //             <TextField
    //               name="password"
    //               label="Password"
    //               type="password"
    //               variant="outlined"
    //               {...register("password", {
    //                 required: "Password is required",
    //                 minLength: {
    //                   value: 6,
    //                   message: "Password must be at least 6 characters long",
    //                 },
    //               })}
    //               error={Boolean(errors.password)}
    //               helperText={errors.password?.message}
    //             />
    //             <TextField
    //               name="passwordRepeat"
    //               label="Confirm Password"
    //               type="password"
    //               variant="outlined"
    //               {...register("passwordRepeat", {
    //                 required: "This is required",
    //                 validate: (value) =>
    //                   value === passwordRef.current || "Passwords do not match",
    //               })}
    //               error={Boolean(errors.passwordRepeat)}
    //               helperText={errors.passwordRepeat?.message}
    //             />
    //           </FormControl>
    //           <div className="clearfix"></div>
    //           <Button className="btns">Submit</Button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="signup-form">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="enter email address"
            name="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="******"
            name="password"
            ref={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="******"
            name="repeatPassword"
            ref={register("repeatPassword", {
              required: "Please repeat your password",
              validate: (value) =>
                value === passwordRef.current || "Passwords do not match",
            })}
          />
          {errors.repeatPassword && (
            <span>{errors.repeatPassword.message}</span>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
