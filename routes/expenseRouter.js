/**
 * external imports
 */
const express = require("express");

/**
 * internal imports
 */
const {
  expenseCreateValidator,
  expenseCreateValidationHandler,
} = require("../middlewares/expense/expenseCreateValidator");
const checkLogin = require("../middlewares/common/checkLogin");
const {
  create,
  getAllExpnese,
  deleteExpense,
} = require("../controllers/expenseController");

/**
 * express router
 */
const router = express.Router();

/**
 * register route
 */
router.post(
  "/create",
  checkLogin,
  expenseCreateValidator,
  expenseCreateValidationHandler,
  create
);

/**
 * get all expenses
 */
router.get("/all", checkLogin, getAllExpnese);

/**
 * delete expense
 */
router.delete("/delete/:id", checkLogin, deleteExpense);

module.exports = router;
