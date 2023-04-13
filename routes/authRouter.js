/**
 * external imports
 */
const express = require("express");

/**
 * internal imports
 */
const { register, login } = require("../controllers/authController");
const {
  addUserValidator,
  addUserValidationHandler,
} = require("../middlewares/auth/registerValidator");
const {
  loginUserValidator,
  loginUserValidationHandler,
} = require("../middlewares/auth/loginValidator");

/**
 * express router
 */
const router = express.Router();

/**
 * register route
 */
router.post("/register", addUserValidator, addUserValidationHandler, register);

/**
 * login route
 */
router.post("/login", loginUserValidator, loginUserValidationHandler, login);

module.exports = router;
