"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const updateStoreSchema = joi_1.default.object({
    name: joi_1.default.string(),
    password: joi_1.default.string()
});
exports.default = updateStoreSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
});
