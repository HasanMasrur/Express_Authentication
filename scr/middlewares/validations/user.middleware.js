
import StatusCode from "../../const/status_code.js";
import Status from "../../const/status.js"; 
import ErrorCode from "../../const/error_code.js";
import ResponseHelper from "../../helpers/response/response.helper.js"
export const UserRegValidationMiddleware = async (req,res,next) =>{
    try {
        const {name,username,email,password}= req.body;
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
        next()
    } catch (error) {
        next(error);
    }

};