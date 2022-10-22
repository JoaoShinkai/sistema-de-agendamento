"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const create_employee_schema_1 = __importDefault(require("@modules/employee/schemas/create-employee.schema"));
const storeAuth_1 = __importDefault(require("@shared/infra/http/middlewares/storeAuth"));
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const EmployeeController_1 = __importDefault(require("../controllers/EmployeeController"));
const employeeRoutes = (0, express_1.Router)();
exports.employeeRoutes = employeeRoutes;
const employeeController = new EmployeeController_1.default();
employeeRoutes.post('/', storeAuth_1.default, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: create_employee_schema_1.default })], employeeController.create);
employeeRoutes.get('/', storeAuth_1.default, employeeController.list);
