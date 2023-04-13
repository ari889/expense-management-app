/**
 * external imports
 */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

/**
 * internal imports
 */
const User = require("../Models/User");

/**
 * register user
 */
const register = async (req, res) => {
  let newUser;
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  newUser = new User({
    ...req.body,
    password: hashPassword,
  });

  /**
   * sae user or send error
   */
  try {
    const result = await newUser.save();

    const userObject = {
      name: result.name,
      email: result.email,
      id: result._id,
    };

    const token = jwt.sign(userObject, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });

    res.status(201).json({
      message: "User was added successfully!",
      token,
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};

/**
 * login user
 */
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        const userObject = {
          name: user.name,
          email: user.email,
          id: user._id,
        };

        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });

        res.status(201).json({
          message: "Login successful!",
          token,
        });
      } else {
        throw createError("Invalid password!");
      }
    } else {
      throw createError("User not found!");
    }
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};

module.exports = {
  register,
  login,
};
