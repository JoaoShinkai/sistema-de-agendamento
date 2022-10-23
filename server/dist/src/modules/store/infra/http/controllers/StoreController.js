"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateStoreService_1 = __importDefault(require("../../../services/CreateStoreService"));
const LoginStoreService_1 = __importDefault(require("../../../services/LoginStoreService"));
const UpdateStoreService_1 = __importDefault(require("../../../services/UpdateStoreService"));
const tsyringe_1 = require("tsyringe");
class StoreController {
    async create(req, res, next) {
        try {
            const data = req.body;
            const service = tsyringe_1.container.resolve(CreateStoreService_1.default);
            res.json(await service.execute(data));
        }
        catch (err) {
            next(err);
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const service = tsyringe_1.container.resolve(LoginStoreService_1.default);
            res.json(await service.execute(email, password));
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { storeId } = req;
            const data = req.body;
            const service = tsyringe_1.container.resolve(UpdateStoreService_1.default);
            res.json(await service.execute(+storeId, data));
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = StoreController;
