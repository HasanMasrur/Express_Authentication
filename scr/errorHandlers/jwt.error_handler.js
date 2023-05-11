import ErrorCode from "../const/error_code.js";
import { ErrorMessage } from "../const/general.js";
import StatusCode from "../const/status_code.js";
import { AppError } from "./appError.js";

const JwtErrorHandler ={
    tokenExpiredError : (error)=>{
        return new AppError(
            "Token expired! please generate new token",
            StatusCode. BAD_REQUEST,
            ErrorCode. TOKEN_EXPIRED_ERROR
        );
    },
    JsonebTokenError: (error)=>{ 
        return new AppError(
             ErrorMessage.Auth,
             StatusCode. UNAUTHORIZED,
             ErrorCode. UNAUTHORIZED_ERROR
             );
            } 
    };
    export default JwtErrorHandler;


