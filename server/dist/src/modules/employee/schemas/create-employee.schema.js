"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const createEmployeeSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    gender: joi_1.default.string().required(),
    age: joi_1.default.number().required(),
    phone: joi_1.default.string().required()
});
exports.default = createEmployeeSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
});
