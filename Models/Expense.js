const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["expense", "income"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Expense", expenseSchema);
