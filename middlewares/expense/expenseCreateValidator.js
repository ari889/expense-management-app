/**
 * external imports
 */
const { check, validationResult } = require("express-validator");

/**
 * validate user
 */
const expenseCreateValidator = [
  check("name").isLength({ min: 1 }).withMessage("Name required!").trim(),
  check("type")
    .isLength({ min: 1 })
    .withMessage("Type is required!")
    .isIn(["expense", "income"])
    .withMessage("Invalid data inputed!"),
  check("amount")
    .isLength({ min: 1 })
    .withMessage("Amount is required!")
    .isInt({ min: 0 })
    .withMessage("Accepted only numbers and minimum 0 accepted!"),
];

const expenseCreateValidationHandler = (req, res, next) => {
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

module.exports = { expenseCreateValidator, expenseCreateValidationHandler };
