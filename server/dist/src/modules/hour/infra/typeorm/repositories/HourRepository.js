"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourRepository = void 0;
const typeorm_1 = require("typeorm");
const Hour_1 = require("../entities/Hour");
class HourRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Hour_1.Hour);
    }
    async create(data) {
        return this.repository.save(data);
    }
    async list(store) {
        return this.repository.find({
            where: {
                store: {
                    id: store
                }
            },
            relations: ['weekday']
        });
    }
    async delete(id) {
        await this.repository.softDelete(id);
    }
    async find(id, store) {
        return this.repository.findOne({
            where: {
                id,
                store: {
                    id: store
                }
            }
        });
    }
    async listByWeekday(store, id) {
        return this.repository.find({
            where: {
                weekday: {
                    id
                },
                store: {
                    id: store
                }
            },
            relations: ['store', 'weekday']
        });
    }
}
exports.HourRepository = HourRepository;
