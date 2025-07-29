import { Schema, model } from "mongoose";
import { ILoginUserForModel } from "./auth.types";

const loginSchema = new Schema<ILoginUserForModel>(
  {
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const Login = model("Login" , loginSchema);
