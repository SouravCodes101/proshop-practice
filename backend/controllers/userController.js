import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Authentication and get token
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc Regitration
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc Logout & Clear Cookies
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//@desc Get user profile
//@route GET /api/users/profile
//@access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

//@desc Update user profile
//@route PUT /api/users/profile
//@access Public
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

//@desc Get all users
//@route GET /api/users
//@access Private/admin
const getUser = asyncHandler(async (req, res) => {
  res.send("Get all user");
});

//@desc Get user by ID
//@route GET /api/users/:id
//@access Private/admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get user by ID");
});

//@desc Delete user by ID
//@route DELETE /api/users/:id
//@access Private/admin
const deleteUserByID = asyncHandler(async (req, res) => {
  res.send("Delete user by ID");
});

//@desc Update user by ID
//@route PUT /api/users/:id
//@access Private/admin
const updateUserByID = asyncHandler(async (req, res) => {
  res.send("Update user by ID");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUser,
  getUserByID,
  deleteUserByID,
  updateUserByID,
};
