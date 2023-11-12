const jwt = require("jsonwebtoken");
const User = require("./../models/User.model");

const isAuthenticated = async (req, res, next) => {
  try {
    console.log("HERE ARE REQ HEADERS", req.headers);
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "No token found in the headers" });
    }
    token = token.replace("Bearer ", "");

    // console.log(token)

    const payload = jwt.verify(token, process.env.TOKEN_SECRET, {
      algorithms: ["HS256"],
    });

    //! This line make everything works!
    req.userId = payload._id;
    next();
  } catch (error) {
    next(error);
  }
};

async function isAdmin(req, res, next) {
  try {
    const findUser = await User.findById(req.userId);
    if (findUser.role === "admin") {
      return next();
    } else {
      return res.status(401).json({ message: "not authorized" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { isAuthenticated, isAdmin };
