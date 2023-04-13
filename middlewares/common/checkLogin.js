/**
 * external imports
 */
const jwt = require("jsonwebtoken");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * check login middleware
 */
const checkLogin = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        next();
      } else {
        throw new Error("Unauthrized access blocked!");
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
  } else {
    res.status(500).json({
      errors: {
        common: {
          msg: "Something went wrong. Please try again!",
        },
      },
    });
  }
};

module.exports = checkLogin;
