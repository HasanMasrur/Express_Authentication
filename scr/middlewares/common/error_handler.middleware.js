//import { MongodbError } from " ../ ../api/const/error_code.js";
import JwtErrorHandler from "../../errorHandlers/jwt.error_handler.js";
import MongodbErrorHandler from "../../errorHandlers/mongodb.error_handler.js";
import MulterErrorHandler from "../../errorHandlers/multerErrorHandler.js";
import ResponseHelper from "../../helpers/response/response.helper.js";

const ErrorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    if (err.name === "MulterError") {
        switch (err.code) {
            case "LIMIT UNEXPECTED FILE":
                const error = MulterErrorHandler.tooManyFiles(err);
                return res
                    .status(error.statusCode)
                    .json(ResponseHelper.errorMessage(error));
        }
    }
    if (err.name === "CastError") {
        const error = MongodbErrorHandler.castError(err);
        return res
            .status(error.statusCode)
            .json(ResponseHelper.errorMessage(error));
    }

    if (err.name === "TokenExpiredError") {
        const error = JwtErrorHandler.tokenExpiredError(err);
        return res
            .status(error.statusCode)
            .json(ResponseHelper.errorMessage(error));
    }
    if (err.name === "JsonWebTokenError") {
        const error = JwtErrorHandler.jsonWebTokenError(err);
        return res
            .status(error.statusCode)
            .json(ResponseHelper.errorMessage(error));
    }
    // if (err.code === MongodbError.DUPLICATE_ERROR) {
    //     const error = MongodbErrorHandler.duplicateError(err);
    //     return res
    //         .status(error.statusCode)
    //         .json(ResponseHelper.errorMessage(error));
    // }

    return res.status(statusCode).json(ResponseHelper.errorMessage(err));
};

export default ErrorHandlerMiddleware;