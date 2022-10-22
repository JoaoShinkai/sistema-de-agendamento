"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const typeorm_1 = require("typeorm");
const Store_1 = __importDefault(require("../entities/Store"));
class StoreRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Store_1.default);
    }
    async create(data) {
        return this.repository.save(data);
    }
    async findByEmail(email) {
        return this.repository.findOne({ where: { email } });
    }
    async update(id, data) {
        await this.repository.update(id, data);
    }
    async hashPassword(password) {
        const salt = await bcryptjs_1.default.genSalt(8);
        return bcryptjs_1.default.hashSync(password, salt);
    }
}
exports.default = StoreRepository;
