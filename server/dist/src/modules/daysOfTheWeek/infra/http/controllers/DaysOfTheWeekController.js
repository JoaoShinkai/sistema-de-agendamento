"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDaysOfTheWeekService_1 = __importDefault(require("../../../services/ListDaysOfTheWeekService"));
const tsyringe_1 = require("tsyringe");
class DaysOfTheWeekController {
    async list(req, res, next) {
        try {
            const service = tsyringe_1.container.resolve(ListDaysOfTheWeekService_1.default);
            res.json(await service.execute());
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = DaysOfTheWeekController;
