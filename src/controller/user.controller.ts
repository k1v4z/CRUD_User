import { Request, Response } from "express";
import userService from "../service/user.service";
import User from "../model/user.model";

export default new class UserController {
    async getAllUser(req: Request, res: Response) {
        try {
            return res.status(200).json({
                message: "k1v4z - Da Nang City",
                users: await userService.getAllUser()
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal server error"
            })
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const newUser: User = req.body;
            const creationStatus = await userService.createUser(newUser);
            return res.status(200).json({
                message: creationStatus
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal server error"
            })
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const userId: number = parseInt(req.params.id);
            const userFollowId: User | null = await userService.getUserById(userId);

            if (userFollowId) {
                return res.status(200).json({
                    user: userFollowId
                })
            }
            return res.status(404).json({
                message: "User not found"
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal server error"
            })
        }
    }

    async deleteUserById(req: Request, res: Response) {
        try {
            const userId: number = parseInt(req.params.id);
            const deleteUserState: number = await userService.deleteUser(userId);
            //number of rows deleted
            if (deleteUserState == 1) {
                return res.status(200).json({
                    message: "Delete Successfully"
                })
            }
            return res.status(404).json({
                message: "User not fond"
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                message: "Internal server error"
            })
        }
    }

    async updateUserById(req: Request, res: Response) {
        try{
            const userId: number = parseInt(req.params.id);
            const updateData: User = req.body;
            const updaterResult = await userService.updateUser(userId, updateData);
            if(updaterResult == 1){
                return res.status(200).json({
                    message: "Update successfully"
                })
            }else if(updaterResult == 0){
                return res.status(200).json({
                    message: "No user record was updated"
                })
            }else if(updaterResult == null){
                return res.status(404).json({
                    message: "User not found"
                })
            }

        }catch(err){
            console.log(err)
            return res.status(500).json({
                message: "Internal server error"
            })
        }
    }
}
