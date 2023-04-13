/**
 * external imports
 */
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");

/**
 * internal imports
 */
const User = require("../../Models/User");

/**
 * validate user
 */
const addUserValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required!")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet!")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("Invalid email address!")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError("Email already esists!");
        }
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("password")
    .isLength({ min: 1 })
    .withMessage("Password is required!")
    .isStrongPassword()
    .withMessage(
      "Password must be atleast 8 character long and should contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol!"
    ),
  check("confirmPassword")
    .isLength({ min: 1 })
    .withMessage("Confirm password required!")
    .custom(async (confirmPassword, { req }) => {
      try {
        const password = req.body.password;
        if (password !== confirmPassword) {
          throw new Error("Password not matched!");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }),
];

const addUserValidationHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = { addUserValidator, addUserValidationHandler };
