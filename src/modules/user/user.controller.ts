import { Request , Response , NextFunction } from "express";
import { RegisterUserCheck } from "./user.types";
import UserService from "./user.service";
import ApiError from "../../utilitys/ApiError.utility";
import ApiResponse from "../../utilitys/ApiResponse.utility";

const registerUser = async (req : Request< {} , {} , RegisterUserCheck > , res : Response , next : NextFunction) => {
    const userData= req.body;

    const result = await UserService.registerUser(userData);

    if(!result) throw new ApiError(500 , "Error Occur on Server Side while registering User");
    
    res
    .status(201)
    .json(new ApiResponse(201 , "User Created Successfully !", result));
}


export default registerUser;