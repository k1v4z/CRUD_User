import express, { Request, Response } from "express";
import userController from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/users", userController.getAllUser);
userRouter.post("/users",userController.createUser);
userRouter.get("/user/:id",userController.getUserById);
userRouter.delete("/user/:id",userController.deleteUserById);
userRouter.put("/user/:id",userController.updateUserById);

export default userRouter; 