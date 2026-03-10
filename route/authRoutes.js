import express from "express";
import controller from "../modules/auth/auth.controller.js"
const router = express.Router();
router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/refresh" , controller.refreshToken);

export default router;