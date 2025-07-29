import {z} from "zod";
import { Request , Response , NextFunction } from "express";
import ApiError from "../../utilitys/ApiError.utility";


const loginUserSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6),
});








// Now middleware logic

const validateTheDataFromReqBody = (req : Request, res : Response , next : NextFunction) => {
    const validateUserData = loginUserSchema.safeParse(req.body);

    if(!validateUserData.success) {
        const errMsg = validateUserData.error.issues.map( (err) => err.message ).join(" , ");

        throw new ApiError(400 , errMsg);
    }

    next();
}