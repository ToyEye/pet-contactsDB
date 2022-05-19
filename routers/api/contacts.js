const express = require("express");

const router = express.Router();
const { contacts: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");

router.get("/", ctrlWrapper(ctrl.getAll));
router.post("/", ctrlWrapper(ctrl.add));

module.exports = router;
