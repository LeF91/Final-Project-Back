const router = require("express").Router();
const { isAuthenticated } = require("../middleware/authMiddlewares");

/**
 * ! All the routes are prefixed by /api
 */
router.get("/", async (req, res, next) => {
  res.json("All good!");
});

router.use("/auth", require("./auth.routes"));
router.use(isAuthenticated);
router.use("/vehicule", require("./vehicule.routes"));
router.use("/comments", require("./comments.routes"));
// router.put("/comments", require("./comments.routes"));

router.use("/users", require("./user.routes"));

module.exports = router;
