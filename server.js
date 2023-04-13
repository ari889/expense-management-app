/**
 * external imports
 */
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

/**
 * internal imports
 */
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const authRouter = require("./routes/authRouter");

/**
 * express app
 */
const app = express();

/**
 * add env
 */
dotenv.config();

/**
 * apply cors
 */
app.use(
  cors({
    origin: process.env.REQUESTED_SERVER,
    optionsSuccessStatus: 200,
  })
);

/**
 * json parse
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * connect mongodb
 */
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log("Database connection successful!"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to nodejs",
  });
});

/**
 * auth routes
 */
app.use("/user", authRouter);

/**
 * 404 not found handler
 */
app.use(notFoundHandler);

/**
 * server error
 */
app.use(errorHandler);

/**
 * start server
 */
app.listen(process.env.PORT, () => {
  console.log(`App is listening to port ${process.env.PORT}`);
});
