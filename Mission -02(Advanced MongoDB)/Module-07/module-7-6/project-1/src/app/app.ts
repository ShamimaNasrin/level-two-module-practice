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
import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(express.text());

//logger

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
};

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


app.get(
    "/",
    logger,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.send(something);
        } catch (error) {
            next(error);
            // res.status(400).json({
            //   success: false,
            //   message: "failed to get data",
            // });
        }
    }
);

app.post("/", logger, (req: Request, res: Response) => {
    res.json({
        message: "successfully received data",
    });
});

app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
});

export default app;