import express from "express";
import UserController from "../controller/user.controller.js";

// Create an instance of UserController
const userController = new UserController();

// Create a router for user-related routes
export const userRouter = express.Router();

// Route to handle user sign-in requests
userRouter.post("/signin", userController.signin);

// Route to handle user sign-up requests
userRouter.post("/signup", userController.signup);