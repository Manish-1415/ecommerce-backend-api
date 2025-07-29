import mongoose, { Schema, model } from "mongoose";
import { IUser } from "./user.types";

const userSchema = new Schema<IUser>(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);

// We have added <IUser> while creating schema and exporting model , why ?
// becuase we use this to simply type safety , we have created an interface if the developer miss number to string or mismatch any other datatype then it will simply provide errors.