"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hour = void 0;
const DaysOfTheWeek_1 = __importDefault(require("@modules/daysOfTheWeek/infra/typeorm/entities/DaysOfTheWeek"));
const Store_1 = __importDefault(require("@modules/store/infra/typeorm/entities/Store"));
const DefaultEntity_1 = __importDefault(require("@shared/infra/typeorm/entities/DefaultEntity"));
const typeorm_1 = require("typeorm");
let Hour = class Hour extends DefaultEntity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Hour.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", Date)
], Hour.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", Date)
], Hour.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Store_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'store_id' }),
    __metadata("design:type", Store_1.default)
], Hour.prototype, "store", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DaysOfTheWeek_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'weekday_id' }),
    __metadata("design:type", DaysOfTheWeek_1.default)
], Hour.prototype, "weekday", void 0);
Hour = __decorate([
    (0, typeorm_1.Entity)('hour')
], Hour);
exports.Hour = Hour;
