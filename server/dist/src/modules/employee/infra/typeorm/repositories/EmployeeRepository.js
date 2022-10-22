"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepository = void 0;
const typeorm_1 = require("typeorm");
const Employee_1 = __importDefault(require("../entities/Employee"));
class EmployeeRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Employee_1.default);
    }
    async create(data) {
        return this.repository.save(data);
    }
    async list(store) {
        return this.repository.find({ where: { store: { id: store } } });
    }
}
exports.EmployeeRepository = EmployeeRepository;
