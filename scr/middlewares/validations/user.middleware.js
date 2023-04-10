
import StatusCode from "../../const/status_code.js";
import Status from "../../const/status.js"; 
import ErrorCode from "../../const/error_code.js";
import constValue from "../../const/const_value.js";
import ResponseHelper from "../../helpers/response/response.helper.js"
import UserModel from "../../models/userSchema.js";
import bcrypt from 'bcrypt';
export const UserRegValidationMiddleware = async (req,res,next) =>{
    try {
     const {name,username,email,password}= req.body;
console.log(password.length);
        if(!name)
     return   res.status(StatusCode.BAD_REQUEST).json(
            ResponseHelper.message(
                ErrorCode.VALIDATION_ERROR,
                Status.ERROR,
                "please provide name"
            )
        );
        if(!username)
    return    res.status(StatusCode.BAD_REQUEST).json(
            ResponseHelper.message(
                ErrorCode.VALIDATION_ERROR,
                Status.ERROR,
                "please provide username"
            )
        );
        if(!email)
   return     res.status(StatusCode.BAD_REQUEST).json(
            ResponseHelper.message(
                ErrorCode.VALIDATION_ERROR,
                Status.ERROR,
                "please provide Email"
            )
        );
        if(!password)
     return   res.status(StatusCode.BAD_REQUEST).json(
            ResponseHelper.message(
                ErrorCode.VALIDATION_ERROR,
                Status.ERROR,
                "please provide Password"
            )
            
        );
        if(password.length <= 7)
        return   res.status(StatusCode.BAD_REQUEST).json(
               ResponseHelper.message(
                   ErrorCode.VALIDATION_ERROR,
                   Status.ERROR,
                   "password should more then 6 character"
               )   
           );
           //Email validation
            if (! email.match(constValue.EMAIL_VALIDATION))  {
                return   res.status(StatusCode.BAD_REQUEST).json(
                    ResponseHelper.message(
                        ErrorCode.VALIDATION_ERROR,
                        Status.ERROR,
                        "please provide a valid email"
                    ) 
                );
           }
           //Email Validation From mongodb
        const user = await  UserModel.findOne({email:email});
        console.log(user);
            if(user){
                return   res.status(StatusCode.BAD_REQUEST).json(
                    ResponseHelper.message(
                        ErrorCode.VALIDATION_ERROR,
                        Status.ERROR,
                        "email already exit"
                    ) 
                );
            }
        
      
        next()
    } catch (error) {
        next(error);
    }

};
export const UserLogValidationMiddleware = async (req,res,next) =>{
    try {
     const {email,password}= req.body;

        if(!email)
   return     res.status(StatusCode.BAD_REQUEST).json(
            ResponseHelper.message(
                ErrorCode.VALIDATION_ERROR,
                Status.ERROR,
                "please provide Email"
            )
        );
        if(!password)
     return   res.status(StatusCode.BAD_REQUEST).json(
            ResponseHelper.message(
                ErrorCode.VALIDATION_ERROR,
                Status.ERROR,
                "please provide Password"
            )
            
        );
        if(password.length <= 7)
        return   res.status(StatusCode.BAD_REQUEST).json(
               ResponseHelper.message(
                   ErrorCode.VALIDATION_ERROR,
                   Status.ERROR,
                   "password should more then 6 character"
               )   
           );
           //Email validation
            if (! email.match(constValue.EMAIL_VALIDATION))  {
                return   res.status(StatusCode.BAD_REQUEST).json(
                    ResponseHelper.message(
                        ErrorCode.VALIDATION_ERROR,
                        Status.ERROR,
                        "please provide a valid email"
                    ) 
                );
           }
           //Email Validation From mongodb
           const user = await UserModel.find({email:req.body.email});
           console.log(user);
           if(user &&  user.length> 0){
               const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
               if(!isValidPassword) {
                return   res.status(StatusCode.BAD_REQUEST).json(
                    ResponseHelper.message(
                        ErrorCode.VALIDATION_ERROR,
                        Status.ERROR,
                        "please provide a valid password"
                    ) 
                );
               } 
           }else {
            return   res.status(StatusCode.BAD_REQUEST).json(
                ResponseHelper.message(
                    ErrorCode.VALIDATION_ERROR,
                    Status.ERROR,
                    "please provide a valid Cradintial"
                ) 
            );
           }
        
      
        next()
    } catch (error) {
        next(error);
    }

};