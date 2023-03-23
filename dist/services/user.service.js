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
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../entities/User");
const userService = {
    createUser(firstname, lastname, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.User();
            const hashedPass = yield bcrypt_1.default.hash(password, 10);
            user.firstname = firstname;
            user.lastname = lastname;
            user.email = email;
            user.password = hashedPass;
            return user.save();
        });
    },
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_1.User.findOneBy({ email });
        });
    },
    countUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.User.count();
        });
    },
};
exports.default = userService;
