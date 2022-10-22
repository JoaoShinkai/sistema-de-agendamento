"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const createHourSchema = joi_1.default.object({
    startTime: joi_1.default.string()
        .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/)
        .required(),
    endTime: joi_1.default.string()
        .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/)
        .required(),
    weekday: joi_1.default.object({ id: Number }).required()
});
exports.default = createHourSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
});
