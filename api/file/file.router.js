const express = require("express");
const { createFile } = require("./file.controller");
const { upload } = require("../middleware/file.middleware");
const { isAuth } = require("../middleware/auth.middleware");

const fileRouter = express.Router();

fileRouter.post("/", [upload.single("path")], createFile);
module.exports = { fileRouter };
