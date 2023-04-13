/**
 * internal imports
 */
const Expense = require("../Models/Expense");

/**
 * create expense
 */
const create = async (req, res) => {
  let expense = new Expense({
    ...req.body,
  });

  try {
    const result = await expense.save();

    res.status(201).json({
      message: "Expense added!",
      name: result.name,
      type: result.type,
      amount: result.amount,
      _id: result._id,
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
 * fetch all expesne
 */
const getAllExpnese = async (req, res) => {
  try {
    const expenses = await Expense.find().select([
      "name",
      "type",
      "amount",
      "_id",
    ]);
    return res.json(expenses);
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
 * delete expense
 */
const deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndDelete({
      _id: req.params.id,
    });

    res.status(200).json({
      message: "User was deleted successfully!",
      id: req.params.id,
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

module.exports = {
  create,
  getAllExpnese,
  deleteExpense,
};
