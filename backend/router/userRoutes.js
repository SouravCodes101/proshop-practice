import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUser,
  getUserByID,
  deleteUserByID,
  updateUserByID,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUser);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUserByID)
  .delete(protect, admin, deleteUserByID);

export default router;
