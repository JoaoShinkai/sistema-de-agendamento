"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourController = void 0;
const CreateHourService_1 = __importDefault(require("@modules/hour/services/CreateHourService"));
const DeleteHourService_1 = __importDefault(require("@modules/hour/services/DeleteHourService"));
const ListHourByWeekdayService_1 = __importDefault(require("@modules/hour/services/ListHourByWeekdayService"));
const ListHourService_1 = __importDefault(require("@modules/hour/services/ListHourService"));
const tsyringe_1 = require("tsyringe");
class HourController {
    async create(req, res, next) {
        try {
            const { storeId } = req;
            const data = req.body;
            const service = tsyringe_1.container.resolve(CreateHourService_1.default);
            res.json(await service.execute({ ...data, store: { id: storeId } }));
        }
        catch (err) {
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            const { storeId } = req;
            const service = tsyringe_1.container.resolve(ListHourService_1.default);
            res.json(await service.execute(+storeId));
        }
        catch (err) {
            next(err);
        }
    }
    async listByWeekday(req, res, next) {
        try {
            const { storeId } = req;
            const { id } = req.params;
            const service = tsyringe_1.container.resolve(ListHourByWeekdayService_1.default);
            res.json(await service.execute(+storeId, +id));
        }
        catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const { storeId } = req;
            const service = tsyringe_1.container.resolve(DeleteHourService_1.default);
            res.json(await service.execute(+id, +storeId));
        }
        catch (err) {
            next(err);
        }
    }
}
exports.HourController = HourController;
