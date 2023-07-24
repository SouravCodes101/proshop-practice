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

router.route("/").post(registerUser).get(getUser);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router
  .route("/:id")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);

export default router;
