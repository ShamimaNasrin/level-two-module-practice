"use strict";
// module: 7-6
/*
import express from "express";
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("hello world!");
});
export default app;
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// module: 7-7
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get('/', (req, res) => {
    res.send("hello world!");
});
app.post('/', (req, res) => {
    console.log(req.body); // express.json() parser ta use na korle express by default ei body ta dibe na
    // res.send('got data');
    res.json({
        message: 'successfully received data',
    });
});
exports.default = app;
