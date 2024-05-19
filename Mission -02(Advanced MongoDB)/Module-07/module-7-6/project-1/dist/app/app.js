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
/*
// module: 7-7
import express, { Request, Response } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(express.text());

app.get('/', (req: Request, res: Response) => {
    res.send("hello world!");
});

app.post('/', (req: Request, res: Response) => {
    console.log(req.body); // express.json() parser ta use na korle express by default ei body ta dibe na
    // res.send('got data');
    res.json({
        message: 'successfully received data',
    });
});

export default app;
*/
/*
// module: 7-8: middleware
import express, { Request, Response, NextFunction } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
};

app.get('/', (req: Request, res: Response) => {
    res.send("hello world!");
});

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body); // express.json() parser ta use na korle express by default ei body ta dibe na
    // res.send('got data');
    res.json({
        message: 'successfully received data',
    });
});

export default app;

*/
/*
// module: 7-9: Express router
import express, { Request, Response, NextFunction } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
};

app.get('/', (req: Request, res: Response) => {
    res.send("hello world!");
});

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body); // express.json() parser ta use na korle express by default ei body ta dibe na
    // res.send('got data');
    res.json({
        message: 'successfully received data',
    });
});

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        success: true,
        message: "User is created sucessfully",
        data: user,
    });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is created sucessfully",
        data: course,
    });
});

export default app;

*/
//Module : 7-10 : error handling
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//logger
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created sucessfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is created sucessfully",
        data: course,
    });
});
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        next(error);
        // res.status(400).json({
        //   success: false,
        //   message: "failed to get data",
        // });
    }
}));
app.post("/", logger, (req, res) => {
    res.json({
        message: "successfully received data",
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.default = app;
