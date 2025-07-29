import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import ApiError from "../../utilitys/ApiError.utility";
import { IUser } from "./user.types";
import { CreateUserInDB } from "./user.types";

const UserService = {
  registerUser: async (userData : CreateUserInDB) => {
    const { fullname, email, password, role } = userData;

    // So till now we have validated the data from req.body , we are simply now performing the business logic . Everything is done now perform logic

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword)
      throw new ApiError(500, "Error Occured while hashing the Password");

    const user = await User.create<CreateUserInDB>({
      fullname,
      email,
      password: hashedPassword,
      role,
    });

    if (!user)
      throw new ApiError(
        500,
        "Error Occurred while saving creating a User in DB"
      );

    return user;
  }
};

export default UserService;
