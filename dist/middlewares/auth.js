"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    const token = req.header("Authorization").split("Bearer ")[1];
    if (!token)
        return res.status(401).json({ error: "Access denied" });
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        req.user = verified;
        return next();
    }
    catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};
exports.auth = auth;
