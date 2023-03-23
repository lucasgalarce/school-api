"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = __importDefault(require("../services/user.service"));
const authController = {
    generateToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jwtSecretKey = process.env.JWT_SECRET_KEY;
            const { email, password } = req.body;
            if (!jwtSecretKey) {
                return res.status(400).send("JWT Secret not set");
            }
            if (!email || !password) {
                return res.status(400).send("email or password not set");
            }
            const user = yield user_service_1.default.getUserByEmail(email);
            const match = yield bcrypt_1.default.compare(password, user.password);
            if (!match)
                res.send(403);
            const data = {
                time: Date(),
                email,
            };
            const token = jsonwebtoken_1.default.sign(data, jwtSecretKey);
            res.send({ token });
        });
    },
    me(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            const user = yield user_service_1.default.getUserByEmail(email);
            delete user.password;
            return res.json(user);
        });
    },
};
exports.default = authController;
