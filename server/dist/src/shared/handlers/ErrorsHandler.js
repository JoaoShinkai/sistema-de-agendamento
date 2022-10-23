"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsHandler = void 0;
const AppError_1 = require("../errors/AppError");
const errorsHandler = (error, _request, response, _) => {
    if (error instanceof AppError_1.AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: `Internal Server Error - ${error.message}`
    });
};
exports.errorsHandler = errorsHandler;
