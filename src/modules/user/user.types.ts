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

// Created interface for type safety , of req.body




export interface CreateUserInDB {
    fullname : string ,
    email : string ,
    password : string ,
    role : string
}




// export interface ForApiResponse {
//     statusCode : number ,                           // Use type checking only for dynamic data like user data , req.body/parmas/header/ etc.
    // message : string ,                              // And use for DB data , not for things u know like ApiError and all that.
//     data : object
// }