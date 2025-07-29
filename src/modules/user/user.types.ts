// We create interface / types only for type-safety while development , this TS functionality will not be available while deploying or when the product is ready , so it is only for here only for type checking and that's it.




export interface IUser {
  fullname: string;
  email: string;
  password: string;
  role: string;
}
// Created type for the User model



export interface RegisterUserCheck {
    fullname : string ,
    email : string ,
    password : string ,
    role : string ,
}