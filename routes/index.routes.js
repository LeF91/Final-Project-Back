const router = require("express").Router();
// const { isAuthenticated } = require("./../middlewares/authMiddlewares");

/**
 * ! All the routes are prefixed by /api
 */
router.get("/", async (req, res, next) => {
  res.json("All good!");
});

router.use("/auth", require("./auth.routes"));

router.use("/vehicules", require("./vehicules.routes"));
router.use("/comments", require("./comments.routes"));

// router.use("/user", require("./user.routes"));

// router.use(isAuthenticated);

module.exports = router;
