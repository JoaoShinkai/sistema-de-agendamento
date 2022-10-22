"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const days_of_the_week_routes_1 = __importDefault(require("@modules/daysOfTheWeek/infra/http/controllers/routes/days-of-the-week.routes"));
const employee_routes_1 = require("@modules/employee/infra/http/routes/employee.routes");
const hour_routes_1 = require("@modules/hour/infra/http/routes/hour.routes");
const store_routes_1 = require("@modules/store/infra/http/routes/store.routes");
const express_1 = require("express");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/store', store_routes_1.storeRoutes);
routes.use('/employee', employee_routes_1.employeeRoutes);
routes.use('/hour', hour_routes_1.hourRoutes);
routes.use('/weekday', days_of_the_week_routes_1.default);
