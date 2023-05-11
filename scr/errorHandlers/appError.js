import Status  from "../const/status.js";
export class AppError extends Error{
    constructor(message,statusCode,errorCode =null){
        super(message);
        this.statusCode = statusCode;
        this.errorCode =errorCode;
        this.status = `${statusCode}`.startsWith("4")?Status.FAIL : Status.ERROR;
        this.isOperational = true ;
        Error.captureStackTrace(this,this.constructor);
    }
}