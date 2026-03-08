import express from "express";
import userController from "../modules/users/userController.js";
import authMiddleware from "../middleware.js/authMiddleware.js";


const router = express.Router();
router.get("/profile", authMiddleware, userController.getProfile);

export default router;