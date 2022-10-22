"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function storeAuth(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Store login is required' });
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, process.env.JWT_STORE_SECRET);
        const { id } = data;
        req.storeId = id;
        return next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Store login is required' });
    }
}
exports.default = storeAuth;
