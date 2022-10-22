"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const DaysOfTheWeek_1 = __importDefault(require("../entities/DaysOfTheWeek"));
class DaysOfTheWeekRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(DaysOfTheWeek_1.default);
    }
    list() {
        return this.repository.find();
    }
}
exports.default = DaysOfTheWeekRepository;
