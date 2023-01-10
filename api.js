"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otakudesu_1 = __importDefault(require("./router/otakudesu"));
const route = (0, express_1.Router)();
route.use("/otakudesu", otakudesu_1.default);
exports.default = route;
