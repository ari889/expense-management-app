/**
 * external imports
 */
const { check, validationResult } = require("express-validator");

/**
 * validate user
 */
const loginUserValidator = [
  check("email")
    .isLength({ min: 1 })
    .withMessage("Email required!")
    .isEmail()
    .withMessage("Invalid email address!")
    .trim(),
  check("password").isLength({ min: 1 }).withMessage("Password is required!"),
];

const loginUserValidationHandler = (req, res, next) => {
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

module.exports = { loginUserValidator, loginUserValidationHandler };
