"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DaysOfTheWeekRepository_1 = __importDefault(require("../../modules/daysOfTheWeek/infra/typeorm/repositories/DaysOfTheWeekRepository"));
const EmployeeRepository_1 = require("../../modules/employee/infra/typeorm/repositories/EmployeeRepository");
const HourRepository_1 = require("../../modules/hour/infra/typeorm/repositories/HourRepository");
const StoreRepository_1 = __importDefault(require("../../modules/store/infra/typeorm/repositories/StoreRepository"));
const tsyringe_1 = require("tsyringe");
tsyringe_1.container.registerSingleton('StoreRepository', StoreRepository_1.default);
tsyringe_1.container.registerSingleton('EmployeeRepository', EmployeeRepository_1.EmployeeRepository);
tsyringe_1.container.registerSingleton('DaysOfTheWeekRepository', DaysOfTheWeekRepository_1.default);
tsyringe_1.container.registerSingleton('HourRepository', HourRepository_1.HourRepository);
