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

    // hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      name,
      email,
      passwordHash,
      isAdmin: false,
    });

    // save user to db
    await newUser.save();

    // return jsonwebtoken
    const payload = {
      user: {
        id: newUser._id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

    // send the token in a HTTP-only cookie
    res
      .cookie("token", token, { httpOnly: true })
      .send({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter all required fields" });
    }

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Wrong email or password entered" });
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.passwordHash);
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

    const token = jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send({ message: "User logged in" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function logout(req, res) {
  try {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .send({ message: "User logged out" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export { signup, login, logout };
