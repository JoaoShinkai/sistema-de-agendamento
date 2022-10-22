"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    async VerifyStoreToken(req, res) {
        const { authorization } = req.headers;
        if (!authorization) {
            res.status(401).json({ message: 'Your session is invalid or expired' });
        }
        else {
            const token = authorization.replace('Bearer', '').trim();
            try {
                const data = jsonwebtoken_1.default.verify(token, process.env.JWT_STORE_SECRET);
                res.status(200).json(data);
            }
            catch {
                res.status(401).json({ message: 'Your session is invalid or expired' });
            }
        }
    }
}
exports.AuthController = AuthController;
