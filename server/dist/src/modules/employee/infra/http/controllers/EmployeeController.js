"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateEmployeeService_1 = __importDefault(require("@modules/employee/services/CreateEmployeeService"));
const ListEmployeeService_1 = __importDefault(require("@modules/employee/services/ListEmployeeService"));
const tsyringe_1 = require("tsyringe");
class EmployeeController {
    async create(req, res, next) {
        try {
            const { storeId } = req;
            const data = req.body;
            const service = tsyringe_1.container.resolve(CreateEmployeeService_1.default);
            res.json(await service.execute({ ...data, store: { id: storeId } }));
        }
        catch (err) {
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            const { storeId } = req;
            const service = tsyringe_1.container.resolve(ListEmployeeService_1.default);
            res.json(await service.execute(+storeId));
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = EmployeeController;
