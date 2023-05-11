import ErrorCode from "../const/error_code.js";
import StatusCode from "../const/status_code.js";

import { AppError } from "./appError.js";

const MulterErrorHandler =
{
tooManyFiles: (error) => {
const message = "Too many files default files count 5";
return new AppError(
message,
StatusCode. BAD_REQUEST,
ErrorCode. BAD_REQUEST_ERROR
)}}
export default MulterErrorHandler;