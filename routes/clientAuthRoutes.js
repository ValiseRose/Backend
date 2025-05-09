const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");
const clientAuth = require("../middleware/clientAuth");

router.post("/register", clientController.register);
router.post("/login", clientController.login);
router.get("/profile", clientAuth, clientController.getProfile);
router.put("/profile", clientAuth, clientController.updateProfile);
router.post("/forgot-password", clientController.forgotPassword);
router.post("/reset-password", clientController.resetPassword);

module.exports = router;
