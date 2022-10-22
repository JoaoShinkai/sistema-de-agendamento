"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hourRoutes = void 0;
const create_hour_schema_1 = __importDefault(require("@modules/hour/schemas/create-hour.schema"));
const storeAuth_1 = __importDefault(require("@shared/infra/http/middlewares/storeAuth"));
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const HourController_1 = require("../controllers/HourController");
const hourRoutes = (0, express_1.Router)();
exports.hourRoutes = hourRoutes;
const hourController = new HourController_1.HourController();
hourRoutes.post('/', storeAuth_1.default, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: create_hour_schema_1.default })], hourController.create);
hourRoutes.get('/', storeAuth_1.default, hourController.list);
hourRoutes.get('/weekday/:id', storeAuth_1.default, hourController.listByWeekday);
hourRoutes.delete('/:id', storeAuth_1.default, hourController.delete);
