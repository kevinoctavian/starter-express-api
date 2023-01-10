"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./api"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5050;
app.use((0, cors_1.default)());
app.get("/", (_, res) => res.send("tidak ada apa apa disini"));
app.get("/ping", (_, res) => res.status(200).send("pingging"));
app.use("/api", api_1.default);
app.listen(port, () => console.log("Server Run on port " + port));
