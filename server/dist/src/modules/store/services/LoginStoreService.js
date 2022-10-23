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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../../../shared/errors/AppError");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tsyringe_1 = require("tsyringe");
let LoginStoreService = class LoginStoreService {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    async execute(email, password) {
        const store = await this.storeRepository.findByEmail(email);
        if (!store) {
            throw new AppError_1.AppError('E-mail e/ou senha inválidos', 401);
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, store.password);
        if (!isValidPassword) {
            throw new AppError_1.AppError('E-mail e/ou senha inválidos', 401);
        }
        const token = jsonwebtoken_1.default.sign({
            id: store.id,
            name: store.name,
            email: store.email
        }, process.env.JWT_STORE_SECRET, {
            expiresIn: '1d'
        });
        const newStore = { ...store };
        delete newStore.password;
        return { store: newStore, token };
    }
};
LoginStoreService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('StoreRepository')),
    __metadata("design:paramtypes", [Object])
], LoginStoreService);
exports.default = LoginStoreService;
