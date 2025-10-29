const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/", controller.getAllProducts);
router.get("/category/:category", controller.getByCategory);
router.get("/by-color/:color", controller.getByColor);

module.exports = router;
