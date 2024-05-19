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