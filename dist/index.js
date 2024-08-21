"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb://127.0.0.1:27017/mongoDb").then(() => {
    console.log("connect to mongodb ");
}).catch((err) => {
    console.log(err);
});
app.use((0, cors_1.default)({
    credentials: true
}));
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    console.log("hello world");
    res.send("hello world ");
});
app.listen(8080, () => {
    console.log("iam connenting to 8080 ");
});
