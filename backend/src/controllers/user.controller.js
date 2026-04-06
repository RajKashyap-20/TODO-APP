const User = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      email,
      password,
      phone,
    });

    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Logout failed",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};