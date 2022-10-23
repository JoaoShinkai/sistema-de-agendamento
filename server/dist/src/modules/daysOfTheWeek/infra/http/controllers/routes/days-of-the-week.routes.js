"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storeAuth_1 = __importDefault(require("../../../../../../shared/infra/http/middlewares/storeAuth"));
const express_1 = require("express");
const DaysOfTheWeekController_1 = __importDefault(require("../DaysOfTheWeekController"));
const daysOfTheWeekRoutes = (0, express_1.Router)();
const daysOfTheWeekController = new DaysOfTheWeekController_1.default();
daysOfTheWeekRoutes.get('/', storeAuth_1.default, daysOfTheWeekController.list);
exports.default = daysOfTheWeekRoutes;
