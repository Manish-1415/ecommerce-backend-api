import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import ApiError from "../../utilitys/ApiError.utility";

const registerUserSchemaForValidation = z.object({
    // We use built in library to validate , for typescript zod is best.
  fullname: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["user", "admin"]),
});

export { registerUserSchemaForValidation };

// Here we use zod for validation , we use pre-built librarys like zod for validating the req.body or the data we are getting from request.
// instead you are implementing by yourself we have pre-built libraries like zod , so simply use this.

// instead of validating data in controller we simply validate data from request via middlewares , and instead of writing business logic / logic  we simply write logic in service and then provide only response to user in clean way.

export const validateDataFromReqBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const checkIfDataIsValid = registerUserSchemaForValidation.safeParse(req.body);
    // We validate request.body from zod's safeParse method.

  if (!checkIfDataIsValid.success) {
    const errorMsg = checkIfDataIsValid.error.issues
      .map((err) => err.message)
      .join(" , ");
    // We make string of errors because we have to send string in ApiError , not array so that's why.

    // Ok so here we use map , because map returns a new array , we take each error message as an individual array , but by .join(" , ") we are simply making that array into a long readable string separated each array as string element and separated by comma.

    // Why we do this instead returning an array itself , because when we throw ApiError , there we need to mention string not an array so that's why we make string by join(" , ") , so now after each messgae the messgae go to the string separated by comma.

    throw new ApiError(400, errorMsg);
  }
  next();
};
