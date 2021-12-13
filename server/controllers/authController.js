import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signup(req, res) {
  try {
    const { name, email, password, passwordVerify } = req.body;

    // validate input
    if (!name || !email || !password || !passwordVerify) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (password !== passwordVerify) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "An account with this email already exists" });
    }

    // create new user
    const newUser = new User({
      name,
      email,
      password,
      isAdmin: false,
    });

    // hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    // save user to db
    await newUser.save();

    // return jsonwebtoken
    const payload = {
      user: {
        id: newUser._id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

    res.json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Please enter correct email and password" });
    }

    // return jsonwebtoken
    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

    res.json({ message: "User logged in" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function logout(req, res) {
  try {
    res.json({ message: "User logged out" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export { signup, login, logout };
