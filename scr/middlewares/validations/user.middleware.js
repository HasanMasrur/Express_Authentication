
import StatusCode from "../../const/status_code.js";
import Status from "../../const/status.js"; 
import ErrorCode from "../../const/error_code.js";
import constValue from "../../const/const_value.js";
import ResponseHelper from "../../helpers/response/response.helper.js"
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
            if (! email.match(constValue.EMAIL_VALIDATION))  {
                return   res.status(StatusCode.BAD_REQUEST).json(
                    ResponseHelper.message(
                        ErrorCode.VALIDATION_ERROR,
                        Status.ERROR,
                        "please provide a valid email"
                    ) 
                );
           }
         
      
        next()
    } catch (error) {
        next(error);
    }

};