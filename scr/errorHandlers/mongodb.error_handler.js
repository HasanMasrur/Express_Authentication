import ErrorCode from "../const/error_code.js";
import StatusCode from "../const/status_code.js";
import { AppError } from "./appError.js";

const MongodbErrorHandler = {
castError: (error) => {
const message = `Invalid ${error.path}: ${error.value}`;
return new AppError(
message,
StatusCode. BAD_REQUEST,
ErrorCode.BAD_REQUEST_ERROR
);
},
duplicateError: (error) => {
const { message: errorMessage } = error;
const searchstring = "index:";
let startingindex= errorMessage. index0f (searchString);
const endIndex = errorMessage. indexof (" _1");
startingIndex = startingIndex + searchString. length;
const value = errorMessage. substring(startingIndex, endIndex);
const message = `Duplicate field value:${value}.Please use another value!`;
return new AppError(
            message,
            StatusCode. BAD_REQUEST,
            ErrorCode. DUPLICATE_ERROR
);
},
};
export default MongodbErrorHandler;
